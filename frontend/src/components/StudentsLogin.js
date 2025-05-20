import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './StudentsLogin.css';


function StudentsLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const dummyAccounts = [
    {
      email: 'admin@example.com',
      password: 'admin123',
      username: 'Admin User',
      role: 'admin',
    },
    {
      email: 'student@example.com',
      password: 'student123',
      username: 'Marwin Conde',
      role: 'student',
    },
  ];

  const handleLogin = () => {
    const found = dummyAccounts.find(
      (acc) => acc.email === email && acc.password === password
    );

    if (found) {
      localStorage.setItem('username', found.username);
      localStorage.setItem('role', found.role);
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <img src="/ptc.jpg" alt="PTC logo" />
      <h2>Student Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="email"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="password"
      />
      <button className="btn" onClick={handleLogin}>
        Login
      </button>
      <div className="account">
        <p>
          Don't have an account? <Link to="/Register">Register Here</Link> 
        </p>
      </div>
    </div>
  );
}

export default StudentsLogin;
