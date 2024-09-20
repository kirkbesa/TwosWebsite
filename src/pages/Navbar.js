import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function Nav() {
    return (
        <nav>
            <ul className="nav-list">
                <li>
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li>
                    <Link to="/Menu.js" className="nav-link">About</Link>
                </li>
                <li>
                    <Link to="/Order" className="nav-link">Contact</Link>
                </li>
                <li>
                    <Link to="/Login" className="nav-link">Counter</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Nav;
