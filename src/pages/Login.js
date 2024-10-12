import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import logo from '../images/TwosLogo.png'; 

function Login() {
  return (
    <div className='login-page'>
    <div className="login-container">
      <form className="login-form">
      <div id="logoContainer">
      <img src={logo} alt="Logo" className='LogoLI' /></div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div id="loginBtn">
        <button className="login-btn" type="submit">Login</button>
        </div>
      </form>
      <p>
        Don't have an account yet? <Link to="/Signup" className="register-link">Register</Link>
      </p>
    </div>
    </div>
  );
}

export default Login;