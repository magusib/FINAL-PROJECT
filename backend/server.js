const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

 
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',   
  database: 'grade_system'
});

db.connect(err => {
  if (err) {
    console.error('DB connection failed:', err);
    return;
  }
  console.log('Connected to MySQL');
});

 
app.get('/students', (req, res) => {
  db.query('SELECT * FROM students', (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

 
app.post('/students', (req, res) => {
  const { name, section } = req.body;
  db.query('INSERT INTO students (name, section) VALUES (?, ?)', [name, section], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json({ id: results.insertId, name, section });
  });
});

 
app.get('/grades/:studentId', (req, res) => {
  const studentId = req.params.studentId;
  db.query('SELECT * FROM grades WHERE student_id = ?', [studentId], (err, results) => {
    if (err) return res.status(500).send(err);
    res.json(results);
  });
});

 
app.post('/grades', (req, res) => {
  const { student_id, subject, grade, remarks } = req.body;
  db.query(
    'INSERT INTO grades (student_id, subject, grade, remarks) VALUES (?, ?, ?, ?)',
    [student_id, subject, grade, remarks],
    (err, results) => {
      if (err) return res.status(500).send(err);
      res.json({ id: results.insertId, student_id, subject, grade, remarks });
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
