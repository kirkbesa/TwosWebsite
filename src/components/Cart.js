import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';  // Import the CartContext

const Cart = () => {
    const { cartItems, updateCart } = useContext(CartContext);  // Get cart items and updateCart from context

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = item.productId?.price || 0;
        return acc + price * item.quantity;
      }, 0);
      
    return (
        <div className="parent-table-container scrollable-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
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
                            {cartItems.map((item) => (
                                <tr key={item._id}>
                                    <td>{item.productId ? item.productId.name : 'No product name'}</td>
                                    <td>{item.productId ? `₱${item.productId.price}` : 'N/A'}</td>
                                    <td>{item.quantity}</td>
                                    <td>{item.productId ? `₱${item.productId.price * item.quantity}` : '₱0.00'}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <table className="total">
                        <tbody>
                            <tr>
                                <td><p>Total:</p></td>
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