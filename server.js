const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const PORT = process.env.PORT || 3000;

// Read Supabase credentials from environment variables
const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_KEY = process.env.SUPABASE_KEY; // Preferably the service_role key to write/read securely

let supabase = null;
if (SUPABASE_URL && SUPABASE_KEY) {
  supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
  console.log("Supabase inicializado correctamente.");
} else {
  console.warn("ADVERTENCIA: SUPABASE_URL o SUPABASE_KEY no definidos en variables de entorno. El servidor correrá pero requerirá modo local simulado en el cliente.");
}

app.use(cors());
app.use(express.json());

// 3 hours and 45 minutes time limit in milliseconds
const ATTEMPT_TIME_LIMIT = (3 * 60 + 45) * 60 * 1000;

// Middleware to check if Supabase is connected
function checkSupabase(req, res, next) {
  if (!supabase) {
    return res.status(503).json({ error: 'El servidor no tiene configurada una base de datos activa. Usa el Modo Local Simulado.' });
  }
  next();
}

// ENDPOINTS

// 1. Login (Registration is closed as requested, pre-generated credentials only)
app.post('/api/login', checkSupabase, async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
  }

  try {
    // Query user in Supabase
    const { data: user, error } = await supabase
      .from('docente_users')
      .select('*')
      .eq('username', username.trim())
      .single();

    if (error || !user) {
      return res.status(401).json({ error: 'Credenciales inválidas o usuario no registrado' });
    }

    // Verify Password (supports bcrypt hashing or direct plaintext check for simple pre-generated keys)
    let isMatch = false;
    if (user.password.startsWith('$2a$') || user.password.startsWith('$2b$')) {
      isMatch = bcrypt.compareSync(password, user.password);
    } else {
      isMatch = (password === user.password);
    }

    if (!isMatch) {
      return res.status(401).json({ error: 'Credenciales inválidas' });
    }

    // Get attempts from Supabase
    const { data: attempts } = await supabase
      .from('docente_attempts')
      .select('*')
      .eq('user_id', user.id);

    const activeAttempt = attempts ? attempts.find(a => a.status === 'in_progress') : null;

    res.json({
      userId: user.id,
      username: user.username,
      attemptsUsed: user.attempts_used,
      activeAttempt: activeAttempt ? {
        id: activeAttempt.id,
        startTime: parseInt(activeAttempt.start_time),
        timeLimitMs: ATTEMPT_TIME_LIMIT,
        elapsedMs: Date.now() - parseInt(activeAttempt.start_time)
      } : null
    });
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor: ' + err.message });
  }
});

// 2. Start / Resume Exam Attempt
app.post('/api/start', checkSupabase, async (req, res) => {
  const { userId } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'userId es requerido' });
  }

  try {
    // Get user details
    const { data: user, error: userErr } = await supabase
      .from('docente_users')
      .select('*')
      .eq('id', userId)
      .single();

    if (userErr || !user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    // Get all user attempts
    const { data: attempts } = await supabase
      .from('docente_attempts')
      .select('*')
      .eq('user_id', userId);

    const finishedAttempts = attempts ? attempts.filter(a => a.status !== 'in_progress') : [];
    
    if (finishedAttempts.length >= 2) {
      return res.status(403).json({ error: 'Ya has agotado tus 2 intentos máximos permitidos' });
    }

    let activeAttempt = attempts ? attempts.find(a => a.status === 'in_progress') : null;

    if (activeAttempt) {
      const elapsed = Date.now() - parseInt(activeAttempt.start_time);
      if (elapsed > ATTEMPT_TIME_LIMIT) {
        // Auto-expire attempt in Supabase
        const endTime = parseInt(activeAttempt.start_time) + ATTEMPT_TIME_LIMIT;
        
        await supabase
          .from('docente_attempts')
          .update({ status: 'expired', end_time: endTime })
          .eq('id', activeAttempt.id);

        const newAttemptsUsed = finishedAttempts.length + 1;
        await supabase
          .from('docente_users')
          .update({ attempts_used: newAttemptsUsed })
          .eq('id', userId);

        if (newAttemptsUsed >= 2) {
          return res.status(403).json({ error: 'Tu intento activo expiró por tiempo límite. Has agotado tus 2 intentos máximos.' });
        }
        
        activeAttempt = null;
      } else {
        // Resume existing active attempt
        return res.json({
          message: 'Resumiendo intento activo',
          attemptId: activeAttempt.id,
          startTime: parseInt(activeAttempt.start_time),
          elapsedMs: elapsed,
          timeLimitMs: ATTEMPT_TIME_LIMIT,
          examMode: 'full'
        });
      }
    }

    // Start a brand new attempt
    const newAttemptId = 'att_' + Math.random().toString(36).substr(2, 9);
    const startTime = Date.now();

    await supabase
      .from('docente_attempts')
      .insert({
        id: newAttemptId,
        user_id: userId,
        start_time: startTime,
        status: 'in_progress',
        exam_mode: 'full'
      });

    const currentAttemptsUsed = finishedAttempts.length + 1;
    await supabase
      .from('docente_users')
      .update({ attempts_used: currentAttemptsUsed })
      .eq('id', userId);

    res.json({
      message: 'Intento iniciado correctamente',
      attemptId: newAttemptId,
      startTime: startTime,
      elapsedMs: 0,
      timeLimitMs: ATTEMPT_TIME_LIMIT,
      examMode: 'full'
    });
  } catch (err) {
    res.status(500).json({ error: 'Error del servidor: ' + err.message });
  }
});

// 3. Submit Exam
app.post('/api/submit', checkSupabase, async (req, res) => {
  const { userId, attemptId, score, answers } = req.body;
  if (!userId || !attemptId) {
    return res.status(400).json({ error: 'userId y attemptId son requeridos' });
  }

  try {
    // Get attempt
    const { data: attempt, error } = await supabase
      .from('docente_attempts')
      .select('*')
      .eq('id', attemptId)
      .eq('user_id', userId)
      .single();

    if (error || !attempt) {
      return res.status(404).json({ error: 'Intento no encontrado' });
    }

    if (attempt.status !== 'in_progress') {
      return res.status(400).json({ error: 'Este intento ya ha sido cerrado o calificado' });
    }

    const elapsed = Date.now() - parseInt(attempt.start_time);
    if (elapsed > ATTEMPT_TIME_LIMIT + 60000) { // 1 min grace period
      // Mark as expired
      const endTime = parseInt(attempt.start_time) + ATTEMPT_TIME_LIMIT;
      await supabase
        .from('docente_attempts')
        .update({ status: 'expired', end_time: endTime })
        .eq('id', attemptId);
      return res.status(403).json({ error: 'El tiempo límite de 2 horas ha expirado' });
    }

    // Submit attempt successfully
    await supabase
      .from('docente_attempts')
      .update({
        status: 'completed',
        end_time: Date.now(),
        score: score,
        answers: answers
      })
      .eq('id', attemptId);

    // Re-verify and update user attempts count
    const { data: userAttempts } = await supabase
      .from('docente_attempts')
      .select('id')
      .eq('user_id', userId)
      .not('status', 'eq', 'in_progress');

    const attemptsCount = userAttempts ? userAttempts.length : 0;
    
    await supabase
      .from('docente_users')
      .update({ attempts_used: attemptsCount })
      .eq('id', userId);

    res.json({
      message: 'Examen enviado y calificado con éxito',
      score: score,
      attemptsUsed: attemptsCount
    });
  } catch (err) {
    res.status(500).json({ error: 'Error al enviar examen: ' + err.message });
  }
});

// 4. Status Check
app.get('/api/status/:userId', checkSupabase, async (req, res) => {
  const { userId } = req.params;

  try {
    const { data: user, error } = await supabase
      .from('docente_users')
      .select('*')
      .eq('id', userId)
      .single();

    if (error || !user) {
      return res.status(404).json({ error: 'Usuario no encontrado' });
    }

    const { data: attempts } = await supabase
      .from('docente_attempts')
      .select('*')
      .eq('user_id', userId);

    const finishedAttempts = attempts ? attempts.filter(a => a.status !== 'in_progress') : [];
    const activeAttempt = attempts ? attempts.find(a => a.status === 'in_progress') : null;

    res.json({
      username: user.username,
      attemptsUsed: finishedAttempts.length,
      activeAttempt: activeAttempt ? {
        id: activeAttempt.id,
        startTime: parseInt(activeAttempt.start_time),
        elapsedMs: Date.now() - parseInt(activeAttempt.start_time),
        timeLimitMs: ATTEMPT_TIME_LIMIT
      } : null,
      history: finishedAttempts.map(a => ({
        id: a.id,
        score: a.score,
        date: new Date(parseInt(a.end_time)).toLocaleString(),
        status: a.status,
        examMode: a.exam_mode
      }))
    });
  } catch (err) {
    res.status(500).json({ error: 'Error consultando estatus: ' + err.message });
  }
});

// Serve static build in production
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor del simulador ejecutándose en http://localhost:${PORT}`);
});
