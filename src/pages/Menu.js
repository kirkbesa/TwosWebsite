import { useState, useEffect, useContext } from "react";
import "../App.css";
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../components/Cart.js';
import ProductList from '../components/ProductList.js';
import { CartContext } from '../components/CartContext.js';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

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

    const [products, setProducts] = useState({ burgers: [], riceMeals: [], pastas: [], extras: [] });  
    const fetchProductsByCategory = async (category) => {
        try {
            const response = await fetch(`http://localhost:5000/api/products/category/${category}`);
        
            if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
            }
        
            const products = await response.json();
            setProducts((prevProducts) => ({ ...prevProducts, [category]: products }));
        } catch (error) {
            console.error(`Error fetching ${category} products:`, error);
        }
    };  
      
    // Fetch data for each category when component mounts
    useEffect(() => {
        fetchProductsByCategory('burgers');
        fetchProductsByCategory('pastas');
        fetchProductsByCategory('ricemeals');
    }, []);




    // CART SHOW HIDE
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        
            <div className="menu-parent fade-in">
                <Container expand="lg" id="MenuContainer">
                <Row>
                    <Col xs={12} md={12} lg={12}>
                    <div className="menu-container scrollable-container">
                        <div className="block-tabs">
                            {/* <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Burgers</button>
                            <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Rice Meals</button>
                            <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Pasta</button>
                            <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Extras</button> */}
                            <Navbar collapseOnSelect expand="lg" className="menuNav">
                                <Container className="nav-container">
                                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="tabs-categories-container">
                                        <button 
                                            className={categoryState === false ? 'tabs-categories-closed' : 'tabs-categories-open'} 
                                            onClick={() => categoryState === false ? setCategoryState(true) : setCategoryState(false)}>
                                        
                                        { categoryState === false ? 
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="30"
                                            height="30"
                                            fill="#fff"
                                            viewBox="0 0 16 16"
                                        >
                                        <path fillRule="evenodd" d="M2 2h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z" />
                                        </svg>

                                        : 
                                        <svg
                                            onClick={handleClose}
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            width="30"
                                            height="30"
                                            style={{ cursor: 'pointer', fill: 'red' }}
                                        >
                                        <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        }
                                        </button>
                                    </Navbar.Toggle>
                                    <Navbar.Collapse id="responsive-navbar-nav" variant="light">
                                        <Nav className="me-auto">
                                            <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Burgers</button>
                                            <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Rice Meals</button>
                                            <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Pasta</button>
                                            <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Extras</button>
                                        </Nav>
                                        
                                    </Navbar.Collapse>
                                    <button className='tabs viewCartButton' onClick={handleShow}>View Cart</button>
                                </Container>
                            </Navbar>
                        </div>
                        <hr />

                        <div className="content-tabs">
                            <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                                <ProductList products={products.burgers} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                                <ProductList products={products.pastas} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                                <ProductList products={products.ricemeals} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                                <ProductList products={products.extras} updateCart={updateCart} />
                            </div>
                        </div>
                    </div>
                    </Col>

                    <Offcanvas className="menu-cart-container" show={show} onHide={handleClose} placement="end">
                        <Offcanvas.Header>
                            <svg
                                onClick={handleClose}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                width="30"
                                height="30"
                                style={{ cursor: 'pointer', fill: 'red' }}
                            >
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <Cart cartItems={cartItems} />
                        </Offcanvas.Body>
                    </Offcanvas>

                    {/* <Col xs={12} lg={4}>
                        <div className="menu-cart-container scrollable-container">
                            <Cart cartItems={cartItems} />
                        </div>
                    </Col> */}

                </Row>
                </Container>
            </div>
    );
};

export default Menu;
