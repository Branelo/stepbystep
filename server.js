const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Підключаємо маршрути з нашої нової папки
const indexRouter = require('./routes/index');

// Кажемо серверу, де шукати статичні файли (картинки, стилі)
app.use(express.static(path.join(__dirname, 'public')));

// Використовуємо маршрути
app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`Сервер працює на http://localhost:${port}`);
});
