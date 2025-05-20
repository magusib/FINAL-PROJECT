import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home">
      <h1 className="main-title">
        WELCOME<br /><br />
        PATEROS TECHNOLOGICAL COLLEGE<br />
        STUDENT PORTAL <br /><br />
      </h1>

      <div className="content-box">
        <img src="/ptc.jpg" alt="PTC logo" />
        <p className="welcome">Welcome to the Student Portal</p>

        <div className="auth-section">
          <p className="auth-question">ARE YOU:</p>
          <div className="auth-buttons">
            <Link to="/StudentsLogin">  
              <button className="student-button">STUDENT</button>
            </Link>
            <Link to="/AdminLogin">    {/* Corrected Link */}
              <button className="admin-button">ADMIN</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
