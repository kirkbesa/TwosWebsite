import { useState, useEffect, useContext } from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../components/Cart.js';
import ProductList from '../components/ProductList.js';
import { CartContext } from '../components/CartContext.js';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Menu = () => {
    const [toggleState, setToggleState] = useState(1);
    const [categoryState, setCategoryState] = useState(false);
    const { cartItems, updateCart } = useContext(CartContext);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    const [cart, setCart] = useState([]);

    // Fetch cart from backend on initial load
  
    useEffect(() => {
      const fetchCart = async () => {
        const response = await fetch('http://localhost:5000/api/cart');
        const data = await response.json();
        setCart(data);
      };
      fetchCart();
    }, []);
  
    const addToCart = async (product) => {
      try {
        const response = await fetch('http://localhost:5000/api/cart/add', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ productId: product._id }), // Ensure you're sending the correct productId
        });
        if (!response.ok) {
          throw new Error('Failed to add item to cart');
        }
        const data = await response.json();
        setCart(data); // Update the cart state with the response from the backend
      } catch (error) {
        console.error('Error adding to cart:', error);
      }
    };
  
    const removeFromCart = async (productId) => {
      const response = await fetch('http://localhost:5000/api/cart/remove', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ productId }),
      });
      const data = await response.json();
      setCart(data);
    };

    const [productList, setProductList] = useState([]);
    useEffect(() => {
      const fetchProducts = async () => {
        const response = await fetch('http://localhost:5000/api/products');
        const data = await response.json();
        setProductList(data);
      };
      fetchProducts();
    }, []);

    return (
        
            <div className="menu-parent fade-in">
                <Container expand="lg" id="MenuContainer">
                <Row>
                    <Col xs={12} lg={8}>
                    <div className="menu-container scrollable-container">
                        <div className="block-tabs">
                            {/* <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Burgers</button>
                            <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Rice Meals</button>
                            <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Pasta</button>
                            <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Extras</button> */}
                            <Navbar collapseOnSelect expand="lg" className="menuNav">
                                <Container className="nav-container">
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="tabs-categories-container">
                                        <button className={categoryState === false ? 'tabs-categories-closed' : 'tabs-categories-open'} onClick={() => categoryState === false ? setCategoryState(true) : setCategoryState(false)}>Categories</button>
                                        { categoryState === false ? <></> : <hr /> }
                                    </Navbar.Toggle>
                                    <Navbar.Collapse id="responsive-navbar-nav" variant="light">
                                        <Nav className="me-auto">
                                            <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Burgers</button>
                                            <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Rice Meals</button>
                                            <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Pasta</button>
                                            <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Extras</button>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>
                        <hr />

                        <div className="content-tabs">
                            <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                                {/* <ProductList products={burgers} updateCart={updateCart} /> */}
                                <ProductList products={productList} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                                {/* <ProductList products={ricemeals} updateCart={updateCart} /> */}
                            </div>
                            <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                                {/* <ProductList products={pastas} updateCart={updateCart} /> */}
                            </div>
                            <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                                {/* <ProductList products={extras} updateCart={updateCart} /> */}
                            </div>
                        </div>
                        
                    </div>
                    </Col>

                    <Col xs={12} lg={4}>
                    <div className="menu-cart-container scrollable-container">
                        <Cart cartItems={cartItems} />
                    </div>
                    </Col>

                </Row>
                </Container>
            </div>
    );
};

export default Menu;
