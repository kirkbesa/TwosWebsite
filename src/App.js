import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import Order from './pages/Order'; 
import Login from './pages/Login';
import 'bootstrap/dist/css/bootstrap.min.css';

import ProductDetailPage from './components/ProductDetailPage';
import CartPage from './components/CartPage';

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Order">Order</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Order" element={<Order />} /> 
        <Route path="/Login" element={<Login />} /> 
      </Routes>
    </Router>
  );
};

export default App;