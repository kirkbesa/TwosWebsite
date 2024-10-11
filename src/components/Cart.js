import React from 'react';
import { Link } from 'react-router-dom';
import './Cart.css';
import '../pages/Menu.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Cart = ({ cartItems }) => {

    const totalPrice = Array.isArray(cartItems) ? 
        cartItems.reduce((total, item) => {
            return total + item.product.price * item.quantity}, 0)
        : 0; // Set totalPrice to 0 if cartItems is not an array

    return (
        <div>
            <h1>Your Cart</h1>
            {!cartItems ? (<p>Your cart is empty</p>) : (
                <div>
                    <table className="table-container">
                        <thead>
                            <tr className="mainRow">
                                <td><p>Meal</p></td>
                                <td><p>Price</p></td>
                                <td><p>Qty</p></td>
                                <td className="fourth right"><p>Total Price</p></td>
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