import { useState, useEffect, useContext } from "react";
import "../App.css";
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../components/Cart.js';
import ProductList from '../components/ProductList.js';
import { CartContext } from '../components/CartContext.js';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
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
        fetchProductsByCategory('extras');
    }, []);

    return (
        
        <div className="menu-parent fade-in">
            <Container expand="lg" fluid id="MenuContainer">
            <Row className="menu-parent-row">
                <Col xs={12} sm={12} md={12} lg={8} >
                <div className="menu-container">
                    <div className="block-tabs">
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

                    <div className="content-tabs scrollable-container">
                        <div className={toggleState === 1 ? 'content active-content' : 'content'}>
                            <ProductList products={products.burgers} updateCart={updateCart} />
                        </div>
                        <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                            <ProductList products={products.ricemeals} updateCart={updateCart} />
                        </div>
                        <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                            <ProductList products={products.pastas} updateCart={updateCart} />
                        </div>
                        <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                            <ProductList products={products.extras} updateCart={updateCart} />
                        </div>
                    </div>
                    
                </div>
                </Col>

                <Col xs={12} sm={12} md={12} lg={4}>
                    <div className="menu-cart-container">
                        <Cart cartItems={cartItems} />
                    </div>
                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default Menu;