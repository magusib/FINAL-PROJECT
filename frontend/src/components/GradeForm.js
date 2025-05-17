import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function GradeForm() {
  const [form, setForm] = useState({ student: '', subject: '', grade: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', form);
    navigate('/dashboard');
  };

  return (
    <div className="container mt-5">
      <h2>Add/Edit Grade</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="student" className="form-control mb-3" placeholder="Student Name" onChange={handleChange} required />
        <input type="text" name="subject" className="form-control mb-3" placeholder="Subject" onChange={handleChange} required />
        <input type="number" name="grade" className="form-control mb-3" placeholder="Grade" onChange={handleChange} required />
        <button type="submit" className="btn btn-success">Save</button>
      </form>
    </div>
  );
}

export default GradeForm;
