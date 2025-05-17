 
const db = require('../db');

 
exports.login = (req, res) => {
  const { email, password } = req.body;
  db.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (err, results) => {
      if (err) return res.status(500).send(err);
      if (results.length > 0) {
        const user = results[0];
        res.json({ username: user.username, role: user.role });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  );
};

 
exports.getGrades = (req, res) => {
  const { student_name, section } = req.query;
  let query = 'SELECT * FROM grades';
  let params = [];

  if (student_name) {
    query += ' WHERE student_name = ?';
    params.push(student_name);
  } else if (section) {
    query += ' WHERE section = ?';
    params.push(section);
  }

  db.query(query, params, (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
};

 
exports.addGrade = (req, res) => {
  const { student_name, section, subject, grade, remarks } = req.body;
  db.query(
    'INSERT INTO grades (student_name, section, subject, grade, remarks) VALUES (?, ?, ?, ?, ?)',
    [student_name, section, subject, grade, remarks],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Grade added successfully' });
    }
  );
};

 
exports.updateGrade = (req, res) => {
  const { id } = req.params;
  const { grade, remarks } = req.body;
  db.query(
    'UPDATE grades SET grade = ?, remarks = ? WHERE id = ?',
    [grade, remarks, id],
    (err, result) => {
      if (err) return res.status(500).send(err);
      res.json({ message: 'Grade updated successfully' });
    }
  );
};
 
exports.deleteGrade = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM grades WHERE id = ?', [id], (err, result) => {
    if (err) return res.status(500).send(err);
    res.json({ message: 'Grade deleted successfully' });
  });
};
