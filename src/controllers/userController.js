const db = require('../db');

exports.getUser = async (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';

  try {
    const [results] = await db.promise().query(query, [userId]);  // async/await을 사용하여 비동기적으로 쿼리 수행

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });  // 결과가 없으면 404 상태 코드와 'User not found' 메시지를 반환
    }

    res.json(results[0]);  // 결과가 있으면 첫 번째 결과를 JSON 형식으로 반환합니다.
  } catch (err) {
    console.error(err);  // 콘솔에 에러를 출력
    res.status(500).json({ error: 'Internal server error' });  // 500 상태 코드와 일반적인 에러 메시지를 반환
  }
};
