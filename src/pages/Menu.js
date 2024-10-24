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

    const [burgers, setBurgers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/burgers')
            .then(response => response.json())
            .then(data => setBurgers(data))
            .catch(error => console.error('Error fetching burgers:', error));
    }, []);

    const [ricemeals, setRicemeals] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ricemeals')
            .then(response => response.json())
            .then(data => setRicemeals(data))
            .catch(error => console.error('Error fetching rice meals:', error));
    }, []);

    const [pastas, setPastas] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/pastas')
            .then(response => response.json())
            .then(data => setPastas(data))
            .catch(error => console.error('Error fetching pastas:', error));
    }, []);

    const [extras, setExtras] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/extras')
            .then(response => response.json())
            .then(data => setExtras(data))
            .catch(error => console.error('Error fetching extras:', error));
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
                                <ProductList products={burgers} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 2 ? 'content active-content' : 'content'}>
                                <ProductList products={ricemeals} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 3 ? 'content active-content' : 'content'}>
                                <ProductList products={pastas} updateCart={updateCart} />
                            </div>
                            <div className={toggleState === 4 ? 'content active-content' : 'content'}>
                                <ProductList products={extras} updateCart={updateCart} />
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
