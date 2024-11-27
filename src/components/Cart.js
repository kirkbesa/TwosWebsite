import React, { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Cart.css';
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from './CartContext';
import { AuthContext } from '../context/authContext';

const Cart = () => {
    const { isAuthenticated } = useContext(AuthContext);
    const { cartItems, updateCart } = useContext(CartContext);  // Get cart items and updateCart from context

    const totalPrice = cartItems.reduce((acc, item) => {
        const price = item.productId?.price || 0;
        return acc + price * item.quantity;
      }, 0);
      
    return (
        <>
        { isAuthenticated ?
        <>
        <div className="parent-table-container scrollable-container">
            <h1>Your Cart</h1>
            {cartItems.length === 0 ? (
                <div className="empty-cart"> 
                    <p>Your cart is empty.</p>
                </div>
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
                                    <td>{item.productId ? `₱${item.productId.price * item.quantity}` : 'Php 0.00'}</td>
                                    <td>
                                        <button className="btn" onClick={() => updateCart(item.productId, 'remove')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                                <path d="M19 13H5V11H19V13Z" fill="currentColor"/>
                                            </svg>
                                        </button>
                                    </td>
                                    <td>
                                        <button className="btn" onClick={() => updateCart(item.productId, 'add')}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                                                <path d="M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z" fill="currentColor"/>
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <hr />
                    <table className="total">
                        <tbody>
                            <tr>
                                <td><p>Total:</p></td>
                                <td><p>Php {totalPrice}</p></td>
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
        </>
        :
        <>
        <div className="not-logged-in">
            <h3>You are not logged in.</h3>
            <NavLink to="/login" className="btn">Login</NavLink>
        </div>
        </>
        }
        </>
    );
};

export default Cart;