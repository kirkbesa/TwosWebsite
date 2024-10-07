import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../App.css"
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from '../components/Cart.js'
import ProductList from '../components/ProductList.js';
import ProductDetailPage from '../components/ProductDetailPage.js';
import CartPage from '../components/CartPage.js';

const Menu = () => {
    const [toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
  
    // const [products, setProducts] = useState([]);
    // useEffect(() => {
    //   fetch('http://localhost:5000/products')  // Connect to backend API
    //     .then(response => response.json())
    //     .then(data => setProducts(data))
    //     .catch(error => console.error('Error fetching products:', error));
    // }, [products]);

    const [burgers, setBurgers] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/burgers')
        .then(response => response.json())
        .then(data => setBurgers(data))
        .catch(error => console.error('Error fetching burgers:', error));
    }, [burgers]);

    const [ricemeals, setRicemeals] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/ricemeals')
        .then(response => response.json())
        .then(data => setRicemeals(data))
        .catch(error => console.error('Error fetching rice meals:', error));
    }, [ricemeals]);

    const [pastas, setPastas] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/pastas')
        .then(response => response.json())
        .then(data => setPastas(data))
        .catch(error => console.error('Error fetching pastas:', error));
    }, [pastas]);

    const [extras, setExtras] = useState([]);
    useEffect(() => {
      fetch('http://localhost:5000/extras')
        .then(response => response.json())
        .then(data => setExtras(data))
        .catch(error => console.error('Error fetching extras:', error));
    }, [extras]);

    const [cartItems, setCartItems] = useState([]);

    // Fetch cart items when the component mounts
    useEffect(() => {
      fetch('http://localhost:5000/cart')
        .then(response => response.json())
        .then(data => setCartItems(data))
        .catch(error => console.error('Error fetching cart:', error));
    }, []);
  
    const updateCart = (product, action) => {
      if (action === 'add') {
        console.log('add', product, cartItems);
        fetch('http://localhost:5000/cart', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({ id: product.id, quantity: 1 }),
        })
          .then(response => response.json())
          .then(data => setCartItems(data))
          .catch(error => console.error('Error adding to cart:', error));
      } else if (action === 'remove') {
        console.log('remove', product, cartItems);
        fetch(`http://localhost:5000/cart/${product.id}`, { method: 'DELETE' })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to remove item from cart');
                }
                return response.json();
            })
            .then(data => {
                // Ensure the response is an array
                if (Array.isArray(data)) {
                    setCartItems(data); // Update cart items to the response
                } else {
                    console.error('Expected an array after deletion but got:', data);
                }
            })
            .catch(error => console.error('Error removing from cart:', error));
      }
    };

    return (
        <div>
            <div className="menu-container">
                <div className="block-tabs">
                    <button className= {toggleState === 1? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(1)}>Burgers</button>
                    <button className= {toggleState === 2? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(2)}>Rice Meals</button>
                    <button className= {toggleState === 3? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(3)}>Pasta</button>
                    <button className= {toggleState === 4? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(4)}>Extras</button>
                </div>
                <hr/>
                <div className="content-tabs scrollable-container">
                    <div className={toggleState === 1 ? 'content active-content': 'content'}>
                        <ProductList products={burgers} updateCart={updateCart} />
                    </div>

                    <div className={toggleState === 2 ? 'content active-content': 'content'}>
                        <ProductList products={ricemeals} updateCart={updateCart}/>
                    </div>

                    <div className={toggleState === 3 ? 'content active-content': 'content'}>
                        <ProductList products={pastas} updateCart={updateCart}/>
                    </div>

                    <div className={toggleState === 4 ? 'content active-content': 'content'}>
                        <ProductList products={extras} updateCart={updateCart}/>
                        
                    </div>
                </div>
            </div>

            <div className="cart-container">
                <Cart cartItems={cartItems}/>
            </div>

        </div>
    );
}
export default Menu;