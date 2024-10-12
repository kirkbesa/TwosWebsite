import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/cart')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const updateCart = (product, action) => {
    let updatedCartItems;

    if (action === 'add') {
      const existingItem = cartItems.find(item => item.product.id === product.id);
      if (existingItem) {
        updatedCartItems = cartItems.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedCartItems = [...cartItems, { product, quantity: 1 }];
      }
      setCartItems(updatedCartItems);

      fetch('http://localhost:5000/cart', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: product.id, quantity: 1 }),
      }).catch(error => console.error('Error adding to cart:', error));

    } else if (action === 'remove') {
      updatedCartItems = cartItems
        .map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0);

      setCartItems(updatedCartItems);

      fetch(`http://localhost:5000/cart/${product.id}`, { method: 'DELETE' })
        .catch(error => console.error('Error removing from cart:', error));
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, updateCart }}>
      {children}
    </CartContext.Provider>
  );
};
