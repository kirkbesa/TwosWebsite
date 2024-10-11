import React, { useContext } from 'react';
import './Checkout.css'
import { CartContext } from '../components/CartContext';

const CartPage = () => {
  const { cartItems } = useContext(CartContext);

  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <table>
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.product.id}>
                  <td>{item.product.name}</td>
                  <td>{item.quantity}</td>
                  <td>₱{item.product.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h3>Total: ₱{totalPrice}</h3>
          <button onClick={() => alert('Place order logic here')}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default CartPage;