const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'db.json');

app.use(cors());
app.use(express.json());

// Initialize JSON database if it doesn't exist
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ users: [], attempts: [] }, null, 2));
}

// Helper functions to read/write DB
function readDB() {
  try {
    const data = fs.readFileSync(DB_FILE, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    return { users: [], attempts: [] };
  }
}

function writeDB(data) {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
}

// 3 hours and 45 minutes time limit in milliseconds (3h * 60m * 60s * 1000ms + 45m * 60s * 1000ms)
const ATTEMPT_TIME_LIMIT = (3 * 60 + 45) * 60 * 1000; 

// Endpoints

// 1. User Registration
app.post('/api/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
  }

  const db = readDB();
  const userExists = db.users.find(u => u.username.toLowerCase() === username.toLowerCase());
  
  if (userExists) {
    return res.status(400).json({ error: 'El usuario ya existe' });
  }

  const passwordHash = bcrypt.hashSync(password, 8);
  const newUser = {
    id: '_' + Math.random().toString(36).substr(2, 9),
    username,
    passwordHash,
    attemptsUsed: 0
  };

  db.users.push(newUser);
  writeDB(db);

  res.status(201).json({ message: 'Usuario registrado exitosamente', userId: newUser.id });
});

// 2. User Login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son requeridos' });
  }

  const db = readDB();
  const user = db.users.find(u => u.username.toLowerCase() === username.toLowerCase());

  if (!user || !bcrypt.compareSync(password, user.passwordHash)) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  // Check active attempts or finished attempts
  const attempts = db.attempts.filter(a => a.userId === user.id);
  const activeAttempt = attempts.find(a => a.status === 'in_progress');

  res.json({
    userId: user.id,
    username: user.username,
    attemptsUsed: user.attemptsUsed,
    activeAttempt: activeAttempt ? {
      id: activeAttempt.id,
      startTime: activeAttempt.startTime,
      timeLimitMs: ATTEMPT_TIME_LIMIT,
      elapsedMs: Date.now() - activeAttempt.startTime
    } : null
  });
});

// 3. Start Exam Attempt
app.post('/api/start', (req, res) => {
  const { userId, examMode } = req.body;
  if (!userId) {
    return res.status(400).json({ error: 'userId es requerido' });
  }

  const db = readDB();
  const userIndex = db.users.findIndex(u => u.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const user = db.users[userIndex];

  // Check if they already have 2 completed or expired attempts
  const userAttempts = db.attempts.filter(a => a.userId === userId);
  const finishedAttemptsCount = userAttempts.filter(a => a.status !== 'in_progress').length;

  if (finishedAttemptsCount >= 2) {
    return res.status(403).json({ error: 'Ya has agotado tus 2 intentos máximos permitidos' });
  }

  // Check if there is an active attempt in progress
  let activeAttempt = userAttempts.find(a => a.status === 'in_progress');

  if (activeAttempt) {
    const elapsed = Date.now() - activeAttempt.startTime;
    if (elapsed > ATTEMPT_TIME_LIMIT) {
      // Auto-expire active attempt if time has run out
      activeAttempt.status = 'expired';
      activeAttempt.endTime = activeAttempt.startTime + ATTEMPT_TIME_LIMIT;
      user.attemptsUsed = finishedAttemptsCount + 1;
      writeDB(db);
      
      if (user.attemptsUsed >= 2) {
        return res.status(403).json({ error: 'Tu intento activo expiró por límite de tiempo. Has agotado tus 2 intentos máximos.' });
      }
      // Create new attempt since the previous one expired and they still have 1 attempt left
      activeAttempt = null;
    } else {
      // Resume active attempt
      return res.json({
        message: 'Resumiendo intento activo',
        attemptId: activeAttempt.id,
        startTime: activeAttempt.startTime,
        elapsedMs: elapsed,
        timeLimitMs: ATTEMPT_TIME_LIMIT,
        examMode: activeAttempt.examMode
      });
    }
  }

  // Start new attempt
  const newAttempt = {
    id: 'att_' + Math.random().toString(36).substr(2, 9),
    userId,
    startTime: Date.now(),
    endTime: null,
    score: null,
    examMode: examMode || 'full',
    status: 'in_progress'
  };

  db.attempts.push(newAttempt);
  user.attemptsUsed = finishedAttemptsCount + 1;
  writeDB(db);

  res.json({
    message: 'Intento iniciado correctamente',
    attemptId: newAttempt.id,
    startTime: newAttempt.startTime,
    elapsedMs: 0,
    timeLimitMs: ATTEMPT_TIME_LIMIT,
    examMode: newAttempt.examMode
  });
});

// 4. Submit Exam
app.post('/api/submit', (req, res) => {
  const { userId, attemptId, score, answers } = req.body;
  if (!userId || !attemptId) {
    return res.status(400).json({ error: 'userId y attemptId son requeridos' });
  }

  const db = readDB();
  const attemptIndex = db.attempts.findIndex(a => a.id === attemptId && a.userId === userId);

  if (attemptIndex === -1) {
    return res.status(404).json({ error: 'Intento no encontrado para este usuario' });
  }

  const attempt = db.attempts[attemptIndex];

  if (attempt.status !== 'in_progress') {
    return res.status(400).json({ error: 'Este intento ya ha sido cerrado o calificado' });
  }

  const elapsed = Date.now() - attempt.startTime;
  if (elapsed > ATTEMPT_TIME_LIMIT + 60000) { // 1 min grace period
    attempt.status = 'expired';
    attempt.endTime = attempt.startTime + ATTEMPT_TIME_LIMIT;
    writeDB(db);
    return res.status(403).json({ error: 'El tiempo límite de 2 horas ha expirado' });
  }

  // Update attempt status to completed
  attempt.status = 'completed';
  attempt.endTime = Date.now();
  attempt.score = score;
  attempt.answers = answers; // Saves question responses

  // Update user's attempts used
  const user = db.users.find(u => u.id === userId);
  if (user) {
    const finishedCount = db.attempts.filter(a => a.userId === userId && a.status !== 'in_progress').length;
    user.attemptsUsed = finishedCount;
  }

  writeDB(db);

  res.json({
    message: 'Examen enviado y calificado con éxito',
    score: score,
    attemptsUsed: user ? user.attemptsUsed : 0
  });
});

// 5. User Status
app.get('/api/status/:userId', (req, res) => {
  const { userId } = req.params;
  const db = readDB();
  const user = db.users.find(u => u.id === userId);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  const attempts = db.attempts.filter(a => a.userId === userId);
  const finishedAttempts = attempts.filter(a => a.status !== 'in_progress');
  const activeAttempt = attempts.find(a => a.status === 'in_progress');

  res.json({
    username: user.username,
    attemptsUsed: finishedAttempts.length,
    activeAttempt: activeAttempt ? {
      id: activeAttempt.id,
      startTime: activeAttempt.startTime,
      elapsedMs: Date.now() - activeAttempt.startTime,
      timeLimitMs: ATTEMPT_TIME_LIMIT
    } : null,
    history: finishedAttempts.map(a => ({
      id: a.id,
      score: a.score,
      date: new Date(a.endTime).toLocaleString(),
      status: a.status,
      examMode: a.examMode
    }))
  });
});

// Serve frontend statically in production
app.use(express.static(__dirname));

app.listen(PORT, () => {
  console.log(`Servidor del simulador ejecutándose en http://localhost:${PORT}`);
});
