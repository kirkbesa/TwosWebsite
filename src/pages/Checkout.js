import React, { useContext, useEffect, useState } from 'react';
import "../App.css";
import '../pages/Menu.css';
import './Checkout.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartContext } from '../components/CartContext';

const CartPage = () => {
  const { cartItems = [] } = useContext(CartContext);

  useEffect(() => {
    console.log('Cart Items in Checkout:', cartItems);
  }, [cartItems]);

  // Safety check for empty or invalid cart
  if (!cartItems || !Array.isArray(cartItems) || cartItems.length === 0) {
    return (
      <div className="checkout-container">
        <div className="cart-container scrollable-container fade-in">
          <h1>Your Cart</h1>
          <p className="empty-cart-message">Your cart is empty</p>
        </div>
      </div>
    );
  }

  // Safe calculation of total with proper error handling
  const totalPrice = cartItems.reduce((total, item) => {
    console.log('Processing item for total:', item); // Debug log
    
    // Check if item and productId exist
    if (!item?.productId) {
      console.warn('Invalid item structure:', item);
      return total;
    }
    const price = item.productId.price || 0;
    const quantity = item.quantity || 1;
    return total + (price * quantity);
  }, 0);

  return (
    <div className="checkout-container">
      <div className="cart-container scrollable-container fade-in">
        <h1>Your Cart</h1>
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
              {cartItems.map((item, index) => {
                console.log('Rendering item:', item); // Debug log

                // Skip invalid items
                if (!item?.productId) {
                  console.warn('Invalid item at index', index, item);
                  return null;
                }

                const price = item.productId.price || 0;
                const quantity = item.quantity || 1;
                const itemTotal = price * quantity;

                return (
                  <tr className="data" key={item._id || `item-${index}`}>
                    <td className="first">
                      <p>{item.productId.name || 'Unknown Item'}</p>
                    </td>
                    <td className="second">
                      <p>₱{price.toFixed()}</p>
                    </td>
                    <td className="third">
                      <p>{quantity}x</p>
                    </td>
                    <td className="fourth right">
                      <p>₱{itemTotal.toFixed()}</p>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <hr />
          <table className="total">
            <tbody>
              <tr>
                <td><p>Total:</p></td>
                <td><p>₱{totalPrice.toFixed()}</p></td>
              </tr>
            </tbody>
          </table>
          <div className="btn-container">
            <button 
              id="order-btn" 
              className="btn btn-primary" 
              onClick={() => alert("Order Placed!")}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;