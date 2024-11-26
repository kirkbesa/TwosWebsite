import React, { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
import logo from '../images/TwosLogo.png'; 

function Signup() {
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      const fullname = fullnameRef.current.value;
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      const confirmPassword = confirmPasswordRef.current.value;

      if (password !== confirmPassword) {
          setError('Passwords do not match.');
          return;
      }

      try {
          const response = await fetch('http://localhost:5000/api/register', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({ fullname, email, password }),
          });

          const data = await response.json();

          if (response.ok) {
              // Redirect to login page after successful signup
              navigate('/login');
          } else {
              // Display error message from the server
              setError(data.message || 'Registration failed.');
          }
      } catch (error) {
          console.error('Error during registration:', error);
          setError('An error occurred during registration.');
      }
  };

  return (
    <div className='base-content'>
      <div className='register-page'>
        <div className="register-container fade-in">
          <form className="login-form" onSubmit={handleSubmit}>
            <div id="logoContainer">
              <img src={logo} alt="Logo" className='LogoSU' />
            </div>
            <div className="form-group">
              <label htmlFor="fullname">Full Name</label>
              <input type="text" id="fullname" name="fullname" ref={fullnameRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" ref={emailRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" ref={passwordRef} required />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" ref={confirmPasswordRef} required />
            </div>
            {error && <p className="error-message">{error}</p>}
            <div id="registerBtn">
              <button type="submit">Register</button>
            </div>
          </form>
          <p>
            Have an account? <Link to="/Login" className="Login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Signup;
