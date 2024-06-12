const db = require('../db');

exports.getUser = (req, res) => {
  const userId = req.params.id;
  const query = 'SELECT * FROM users WHERE id = ?';

  db.query(query, [userId], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(results[0]);
  });
};
