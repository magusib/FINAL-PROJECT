import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import GradeForm from './components/GradeForm';
import './styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add-grade" element={<GradeForm />} />
        <Route path="/edit-grade/:id" element={<GradeForm />} />
      </Routes>
    </Router>
  );
}

export default App;
