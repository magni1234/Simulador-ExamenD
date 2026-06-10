-- SQL SCRIPT PARA INICIALIZAR TABLAS EN EL EDITOR DE SUPABASE (SQL EDITOR)

-- 1. Crear tabla de usuarios (Docentes registrados por administrador)
CREATE TABLE docente_users (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  username TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL, -- Almacena contraseñas en texto plano o hash bcrypt
  attempts_used INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Crear tabla de intentos de examen
CREATE TABLE docente_attempts (
  id TEXT PRIMARY KEY,
  user_id TEXT REFERENCES docente_users(id) ON DELETE CASCADE NOT NULL,
  start_time BIGINT NOT NULL,
  end_time BIGINT,
  score INTEGER,
  status TEXT DEFAULT 'in_progress' NOT NULL, -- 'in_progress', 'completed', 'expired'
  exam_mode TEXT DEFAULT 'full' NOT NULL,
  answers JSONB,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Habilitar permisos públicos para que el Backend pueda operar las tablas
ALTER TABLE docente_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE docente_attempts ENABLE ROW LEVEL SECURITY;

-- Políticas de RLS para acceso de servicio (bypass)
CREATE POLICY "Permitir lectura y escritura completa al backend" 
ON docente_users FOR ALL 
USING (true) 
WITH CHECK (true);

CREATE POLICY "Permitir lectura y escritura completa de intentos al backend" 
ON docente_attempts FOR ALL 
USING (true) 
WITH CHECK (true);

-- 4. Insertar credenciales de demostración pre-generadas por defecto
-- Puedes cambiar o agregar más filas con los códigos de acceso que desees darles a tus alumnos
INSERT INTO docente_users (username, password) VALUES 
('DOCENTE_DEMO', '123'),
('DOCENTE_TEST', 'abc'),
('COD-8192', 'docente2026'),
('COD-3749', 'educacionfisica'),
('COD-9021', 'nombramiento26');
