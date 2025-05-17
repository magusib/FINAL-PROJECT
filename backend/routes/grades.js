// routes/grades.js
const express = require('express');
const router = express.Router();
const gradeController = require('../controllers/gradesController');

// Login
router.post('/login', gradeController.login);

// Get all grades or by student name
router.get('/grades', gradeController.getGrades);

// Add a grade
router.post('/grades', gradeController.addGrade);

// Update a grade
router.put('/grades/:id', gradeController.updateGrade);

// Delete a grade
router.delete('/grades/:id', gradeController.deleteGrade);

module.exports = router;
// routes/grades.js or directly in server.js if you're using one file

app.put('/api/grades/:id', (req, res) => {
  const gradeId = req.params.id;
  const { grade, remarks, subject } = req.body;

  const sql = 'UPDATE grades SET grade = ?, remarks = ? WHERE id = ? AND subject = ?';
  db.query(sql, [grade, remarks, gradeId, subject], (err, result) => {
    if (err) {
      console.error('Error updating grade:', err);
      return res.status(500).send('Failed to update grade');
    }
    res.send('Grade updated successfully');
  });
});
