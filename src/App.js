import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { CartProvider } from './components/CartContext';
import Home from './pages/Home'; 
import Menu from './pages/Menu'; 
import Order from './pages/Order'; 
import Checkout from './pages/Checkout'; 
import Logo from './images/TwosLogo.png'; 
import Login from './pages/Login';
import Signup from './pages/Signup';

function App() {
  return (
    <CartProvider>
      <Router>
        <nav>
          <div className="nav-container">
            <img src={Logo} alt="Logo" className='Logo' />
            <ul>
              <li>
                <NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/Menu" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/Order" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Order
                </NavLink>
              </li>
              <li>
                <NavLink to="/Checkout" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Cart
                </NavLink>
              </li>
              <li>
                <NavLink to="/Login" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Login
                </NavLink>
              </li>
              <li>
                <NavLink to="/Signup" className={({ isActive }) => isActive ? 'active-link' : ''}>
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Order" element={<Order />} /> 
          <Route path="/Checkout" element={<Checkout />} /> 
          <Route path="/Login" element={<Login />} /> 
          <Route path="/Signup" element={<Signup />} /> 
        </Routes>  
      </Router>
    </CartProvider>
  );
}

export default App;
