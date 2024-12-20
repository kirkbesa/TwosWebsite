import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, useNavigate } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import { AuthContext } from './context/authContext';
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import Checkout from './pages/Checkout'; 
import Login from './pages/Login'; 
import Signup from './pages/Signup'; 
import Logo from './images/TwosLogo.png'; 

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const { user, isAuthenticated, logout } = useContext(AuthContext);

  return (
      <CartProvider>
        <Router>
          <Container expand="lg" fluid>
            <Navbar collapseOnSelect expand="lg" sticky="top" className="custom-navbar">
              <Container className="nav-container">
                <Navbar.Brand to="/"><img src={Logo} alt="Logo" className='Logo' /></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="#fe7223"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M2 2h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
                  </svg>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav" variant="light">
                  <Nav className="me-auto">
                    <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
                    <NavLink to="/Menu" className={({ isActive }) => isActive ? 'active-link' : ''}>Menu</NavLink>
                    { isAuthenticated ?
                    <>
                      <NavLink to="/Checkout" className={({ isActive }) => isActive ? 'active-link' : ''}>Checkout</NavLink>
                    </>
                    :
                    <>
                      <NavLink className='disabledLink'>Checkout</NavLink>
                    </>
                    }
                    
                  </Nav>
                  <Nav>
                    {isAuthenticated ? (
                      <>
                        <NavLink className="greeting">Hello, {user.fullname}!</NavLink>
                        <NavLink to='/' className='active-link'>
                          <button className="logout" onClick={logout}>Log Out</button>
                        </NavLink>
                      </>
                    ) : (
                      <>
                        <NavLink to="/Login" className={({ isActive }) => isActive ? 'active-link' : ''}>Login</NavLink>
                        <NavLink to="/Signup" className={({ isActive }) => isActive ? 'active-link' : ''}>Sign-Up</NavLink>
                      </>
                    )}
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Menu" element={<Menu />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
          </Container>
        </Router>
      </CartProvider>
  );
}

export default App;
