const mysql = require('mysql');
require('dotenv').config(); //.env 파일에서 환경 변수를 로드

const db = mysql.createPool({
  host: process.env.DB_HOST ,
  user: process.env.DB_USER ,
  password: process.env.DB_PASSWORD ,
  database: process.env.DB_NAME,
  waitForConnections: true, // 모든 연결이 사용 중일 때 대기 여부.
  connectionLimit: 10, //동시 유지 가능 최대 연결 수  
  queueLimit: 0 // 대기열에 넣을 수 있는 최대 연결 요청 수.
});

db.getConnection((err, connection) => {
  if (err) {
    console.error('데이터베이스 연결 실패:', err.stack);
    return;
  }
  console.log('데이터 베이스 연결 완료');
  connection.release();  // 연결을 풀에 반환합니다.
});

module.exports = db.promise();  // 프로미스 기반 메서드를 사용하기 위해 promise()를 호출합니다.
