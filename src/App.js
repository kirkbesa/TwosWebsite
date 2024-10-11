import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import Checkout from './pages/Checkout'; 
import Login from './pages/Login'; 

function App() {
  return (
    <CartProvider>
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Menu">Menu</Link></li>
          <li><Link to="/Login">Login</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Checkout" element={<Checkout />} /> 
        <Route path="/Login" element={<Login />} /> 
      </Routes>  
    </Router>
    </CartProvider>
  );
};

export default App;