const express = require('express');
const { Pool } = require('pg');
const path = require('path');
require('dotenv').config();

const app = express();
const port = 3000;

// Налаштування підключення до PostgreSQL
const pool = new Pool({
  user: 'branelo',
  host: 'localhost',
  database: 'branelo_db',
  password: '8097', // Твій пароль, який ми створили
  port: 5432,
});

// Дозволяємо серверу бачити файли (картинки, html)
app.use(express.static(path.join(__dirname)));

// Головна сторінка
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Тестовий маршрут, щоб перевірити базу
app.get('/db-test', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ message: 'База працює!', time: result.rows[0].now });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(port, () => {
  console.log(`Сервер запущено на http://localhost:${port}`);
});
