import { useState, useEffect, useContext } from "react";
import "../App.css";
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../components/Cart.js';
import ProductList from '../components/ProductList.js';
import { CartContext } from '../components/CartContext';

const Menu = () => {
    const [toggleState, setToggleState] = useState(1);
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
        <div>
            <div className="menu-container">
                <div className="block-tabs">
                    <button className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(1)}>Burgers</button>
                    <button className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(2)}>Rice Meals</button>
                    <button className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(3)}>Pasta</button>
                    <button className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'} onClick={() => toggleTab(4)}>Extras</button>
                </div>
                <hr />
                <div className="content-tabs scrollable-container">
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

            <div className="cart-container">
                <Cart cartItems={cartItems} />  {}
            </div>
        </div>
    );
};

export default Menu;
