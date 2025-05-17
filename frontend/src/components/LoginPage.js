import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
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
    <div className="login-container" style={{ maxWidth: 400, margin: '100px auto', padding: 20 }}>
      <h2 className="text-center mb-4">Login</h2>

      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control mb-3"
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control mb-3"
      />
      <button className="btn btn-primary w-100" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}

export default Login;
