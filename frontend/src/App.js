import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AdminLogin from './components/AdminLogin';
import StudentsLogin from './components/StudentsLogin'
import Register from './components/Register'
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import GradeForm from './components/GradeForm';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StudentsLogin" element={<StudentsLogin />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/loginPage" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-grade" element={<GradeForm />} />
        <Route path="/edit-grade/:id" element={<GradeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
