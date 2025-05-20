import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

let allGrades = [  
  { id: 1, name: 'Marwin Conde', section: 'BSIT 2I', subject: 'AppDEV', grade: 87, remarks: 'Passed' },
  { id: 1, name: 'Marwin Conde', section: 'BSIT 2I', subject: 'SCIENCE', grade: 97, remarks: 'Passed' },
  { id: 1, name: 'Marwin Conde', section: 'BSIT 2I', subject: 'Math', grade: 90, remarks: 'Passed' },
  { id: 2, name: 'Batusay', section: 'BSIT 2I', subject: 'Math', grade: 85, remarks: 'Passed' },
  { id: 3, name: 'Wyatt', section: 'BSIT 2I', subject: 'Math', grade: 78, remarks: 'Passed' },
  { id: 4, name: 'Darna', section: 'BSIT 2I', subject: 'Math', grade: 60, remarks: 'Failed' },
  { id: 5, name: 'Captain America', section: 'BSIT 2I', subject: 'Math', grade: 82, remarks: 'Passed' },
  { id: 6, name: 'Spiderman', section: 'BSIT 2I', subject: 'Math', grade: 75, remarks: 'Passed' },
  { id: 7, name: 'Lola Amore', section: 'BSIT 2J', subject: 'Math', grade: 65, remarks: 'Failed' },
  { id: 8, name: 'PopoyNiBasha', section: 'BSIT 2J', subject: 'Math', grade: 80, remarks: 'Passed' },
];

function Dashboard() {
  const navigate = useNavigate();
  const role = localStorage.getItem('role');
  const currentUser = localStorage.getItem('username');
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [updatedGrade, setUpdatedGrade] = useState('');
  const [updatedRemarks, setUpdatedRemarks] = useState('');
  const [showSidebar, setShowSidebar] = useState(false);

  const filteredStudents = allGrades.filter(
    (grade) => grade.section === selectedSection
  );
  const studentGrades = allGrades.filter(
    (grade) => grade.name === selectedStudent?.name
  );

  const currentUserGrades = allGrades.filter(
    (grade) => grade.name === currentUser
  );

  const handleLogout = () => {
      localStorage.removeItem('username');
      localStorage.removeItem('role');
    navigate('/');
  };

  const handleGradeChange = (e) => setUpdatedGrade(e.target.value);
  const handleRemarksChange = (e) => setUpdatedRemarks(e.target.value);

  const handleSaveGrade = (gradeId, subject) => {
    allGrades = allGrades.map((grade) => {
      if (grade.id === gradeId && grade.subject === subject) {
        return {
          ...grade,
          grade: updatedGrade || grade.grade,
          remarks: updatedRemarks || grade.remarks,
        };
      }
      return grade;
    });

    setUpdatedGrade('');
    setUpdatedRemarks('');
    setSelectedStudent(null);
  };

  const handleDeleteGrade = (gradeId) => {
    allGrades = allGrades.filter((grade) => grade.id !== gradeId);
    setSelectedStudent(null);
  };

  const handleBackToStudentList = () => {
    setSelectedStudent(null);
  };

  return (
    <div className="dashboard-wrapper">
      {role === 'admin' && (
        <div className="sidebar-toggle-btn" onClick={() => setShowSidebar(!showSidebar)}>
          {showSidebar ? 'Hide Menu' : 'Show Menu'}
        </div>
      )}

      {showSidebar && role === 'admin' && (
        <div className="sidebar">
          <ul>
            <li>
              <button onClick={() => setSelectedSection(null)}>Home</button>
            </li>
            <li>
              Section
              <ul>
                <li onClick={() => setSelectedSection('BSIT 2I')}>BSIT 2I</li>
                <li onClick={() => setSelectedSection('BSIT 2J')}>BSIT 2J</li>
              </ul>
            </li>
          </ul>
        </div>
      )}

      <div className="main-content">
        <nav className="navbar bg-dark text-white p-2 d-flex justify-content-between">
          {role === 'admin' && (
            <button className="btn btn-outline-light" onClick={() => setShowSidebar(!showSidebar)}>
              {showSidebar ? 'Hide Menu' : 'Show Menu'}
            </button>
          )}
          <span>Logged in as: {currentUser} ({role})</span>
          <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
        </nav>

        <div className="container mt-4">
          { }
          {role === 'admin' && selectedSection && !selectedStudent && (
            <div>
              <h3>Students in {selectedSection}</h3>
              <div className="student-box-container">
                {[...new Set(filteredStudents.map((s) => s.name))].map((name, index) => (
                  <div
                    className="student-box"
                    key={index}
                    onClick={() => setSelectedStudent({ name })}
                  >
                    {name}
                  </div>
                ))}
              </div>
            </div>
          )}

          {}
          {role === 'admin' && selectedStudent && (
            <div>
              <button className="btn btn-secondary" onClick={handleBackToStudentList}>
                Back to Student List
              </button>
              <h3>Grades for {selectedStudent.name}</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {studentGrades.map((grade) => (
                    <tr key={grade.id}>
                      <td>{grade.subject}</td>
                      <td>
                        <input
                          type="number"
                          value={updatedGrade || grade.grade}
                          onChange={handleGradeChange}
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          value={updatedRemarks || grade.remarks}
                          onChange={handleRemarksChange}
                        />
                      </td>
                      <td>
                        <button onClick={() => handleSaveGrade(grade.id, grade.subject)}>Save</button>
                        <button onClick={() => handleDeleteGrade(grade.id)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          { }
          {role === 'student' && (
            <div>
              <h3>My Grades</h3>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Grade</th>
                    <th>Remarks</th>
                  </tr>
                </thead>
                <tbody>
                  {currentUserGrades.map((grade) => (
                    <tr key={grade.id}>
                      <td>{grade.subject}</td>
                      <td>{grade.grade}</td>
                      <td>{grade.remarks}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
