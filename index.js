const express = require('express');
const app = express();
const port = 3000;
const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user');

// MySQL 데이터베이스 연결 설정
const mysql = require('mysql2');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'mydatabase'
});

db.connect(err => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to database.');
});

app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
