import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import logo from '../images/TwosLogo.png';

function Nav() {
    return (
      <nav>
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo" />
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li>
              <Link to="/Menu" className="nav-link">About</Link>
            </li>
            <li>
              <Link to="/Order" className="nav-link">Order</Link>
            </li>
            <li className="login-item">
              <Link to="/Login" className="nav-link">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

export default Nav;
