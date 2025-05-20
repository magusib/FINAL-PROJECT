import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: '',
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
            isValid = false;
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
            isValid = false;
        } else if (!isValidEmail(formData.email)) {
            newErrors.email = 'Invalid email format';
            isValid = false;
        }
        if (!formData.password.trim()) {
            newErrors.password = 'Password is required';
            isValid = false;
        } else if (formData.password.length < 6) {
             newErrors.password = 'Password must be at least 6 characters';
             isValid = false;
        }
        if (!formData.role) {
            newErrors.role = 'Role is required';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const isValidEmail = (email) => {
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return emailRegex.test(email);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
        // Simulate registration process (e.g., sending data to a server)
        console.log('Form Data:', formData);
        setSuccessMessage('Registration successful!');
        setFormData({ name: '', email: '', password: '', role: '' }); // Clear form
        setErrors({}); // Clear errors
         setTimeout(() => {
            setSuccessMessage('');
          }, 3000);
    }

  };

  return (
    <form onSubmit={handleSubmit} style={{ border: '1px solid #ccc' }}>
      <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr />

        <label htmlFor="name">
          <b>Name</b>
        </label>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}

        <label htmlFor="email">
          <b>Email</b>
        </label>
        <input
          type="text"
          placeholder="Enter Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
         {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}

        <label htmlFor="password">
          <b>Password</b>
        </label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <p className="text-red-500 text-xs italic">{errors.password}</p>}

        <label htmlFor="role">
            <b>Role</b>
        </label>
        <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            required
        >
            <option value="" disabled selected>Select Role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
        </select>
        {errors.role && <p className="text-red-500 text-xs italic">{errors.role}</p>}

        <p>
          By creating an account you agree to our{' '}
          <a href="#" style={{ color: 'dodgerblue' }}>
            Terms & Privacy
          </a>.
        </p>

        <div className="clearfix">
          <button type="submit" className="signupbtn">
            Sign Up
          </button>
        </div>
         {successMessage && <p className="text-green-600 font-semibold mt-4">{successMessage}</p>}
      </div>
    </form>
  );
};

export default Register;
