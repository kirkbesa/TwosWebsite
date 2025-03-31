import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../images/TwosLogo.png'; 
import { useAuth } from '../context/authContext';

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
        const response = await fetch('http://localhost:5000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            login(data.user);
            navigate('/');
        } else {
            console.error("Login failed:", data.message);
        }
    } catch (error) {
        console.error("Error during login:", error);
    }
  };

  return (
    <div className="base-content">
      <div className="login-page">
        <div className="login-container fade-in">
          <form className="login-form" onSubmit={handleSubmit}>
            <div id="logoContainer">
              <img src={logo} alt="Logo" className='LogoLI' />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" ref={passwordRef} required />
            </div>
            <div id="loginBtn">
              <button className="login-btn" type="submit">Login</button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p>
            Don't have an account yet?{" "}
            <Link to="/Signup" className="register-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
