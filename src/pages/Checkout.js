import React, { useContext } from 'react';
import "../App.css";
import '../pages/Menu.css';
import './Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="checkout-container">
      <div className="cart-container scrollable-container fade-in">
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
                  <button id="order-btn" className="btn btn-primary" onClick={() => alert("Order Placed!")}>Place Order</button>
                </div>
            </div>
          )}
      </div>
    </div>  
  );
};

export default CartPage;