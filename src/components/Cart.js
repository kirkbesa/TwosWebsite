import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems }) => {
    const [cart, setCart] = useState([]);
    const [error, setError] = useState(null);
  
    // Fetch cart data from the backend when the component mounts
    useEffect(() => {
      const fetchCart = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/cart');
          if (!response.ok) {
            throw new Error('Failed to fetch cart data');
          }
          const data = await response.json();
          setCart(data); // Set the fetched cart data into state
        } catch (error) {
          console.error('Error fetching cart data:', error);
          setError(error.message); // Set the error message
        }
      };
      fetchCart();
    }, []);
  
    // Check if cart is an array
    if (!Array.isArray(cart)) {
      return <div>Error: Cart data is not valid.</div>;
    }
  
    // Calculate total price
    const totalPrice = cart.reduce((acc, item) => acc + item.productId.price * item.quantity, 0);

    return (
        <div className="parent-table-container scrollable-container">
            <h1>Your Cart</h1>
            {!cartItems ? (<p>Your cart is empty</p>) : (
                <div>
                    <table className="table-container">
                        <thead>
                            <tr className="mainRow">
                                <td><p>Meal</p></td>
                                <td><p>Price</p></td>
                                <td><p>Qty</p></td>
                                <td className="fourth right"><p>Price</p></td>
                            </tr>
                        </thead>
                        <tbody>
                        {cartItems.map(item => (
                            <tr className="data" key={item.product.id}>
                                <td className="first"><p> {item.product.name}</p></td>
                                <td className="second"><p>₱{item.product.price}</p></td>
                                <td className="third"><p>{item.quantity}x</p></td>
                                <td className="fourth right"><p>₱{item.product.price * item.quantity}</p></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                    <hr />
                    <table className="total">
                        <tbody>
                            <tr>
                                <td><p>Total:</p> </td>
                                <td><p>₱{totalPrice}</p></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="btn-container">
                        <Link to="/Checkout">
                            <button id="checkout-btn" className="btn btn-primary">Checkout</button>
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;