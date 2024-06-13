const express = require('express');
const router = express.Router(); //새로운 라우터 객체를 생성

router.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

module.exports = router;
