import React from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';
import logo from '../images/TwosLogo.png'; 

function Signup() {
  return (
    <div className='register-page'>
    <div className="register-container fade-in">
      <form className="login-form">
      <div id="logoContainer">
      <img src={logo} alt="Logo" className='LogoSU' /></div>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <label htmlFor="confirmpassword">Confirm Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div id="registerBtn">
        <button type="submit">Register</button>
        </div>
      </form>
      <p>
        Already have an account? <Link to="/Login" className="Login">Login</Link>
      </p>
    </div>
    </div>
  );
}

export default Signup;