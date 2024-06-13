const express = require('express');
const app = express();
require('dotenv').config(); // .env 파일의 환경 변수를 로드합니다.
const port = process.env.PORT;
const indexRouter = require('./src/routes/index');
const userRouter = require('./src/routes/user');


app.use('/', indexRouter);
app.use('/user', userRouter);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = db.promise(); // 프로미스 기반 메서드를 사용하기 위해 db를 모듈로 내보냅니다.
