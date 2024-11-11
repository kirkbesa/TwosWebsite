import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/cart');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Raw cart data from API:', data);
        // Validate and transform the data
        const validatedData = data.map(item => {
          // Debug log each item
          console.log('Processing cart item:', item);

          if (!item || !item.productId) {
            console.warn('Invalid cart item:', item);
            return null;
          }
          // Ensure price is a number
          const price = item.productId.price || 0;
          const quantity = item.quantity || 1;
          return {
            ...item,
            quantity,
            productId: {
              ...item.productId,
              price
            }
          };
        }).filter(Boolean); // Remove null items
        console.log('Validated cart data:', validatedData);
        setCartItems(validatedData);
      } catch (error) {
        console.error('Error fetching cart:', error);
        setCartItems([]); // Set empty array on error
      }
    };
    fetchCart();
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/cart')
      .then(response => response.json())
      .then(data => {
        console.log('Fetched cart data:', data);  // Check if data contains productId with price
        setCartItems(data);
      })
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

const updateCart = async (product, action) => {
  try {
    const response = await fetch(`http://localhost:5000/api/cart/${action}`, {
      method: action === 'add' ? 'POST' : 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ productId: product._id }),
    });

    if (!response.ok) {
      throw new Error('Failed to update cart');
    }

    const updatedCart = await response.json();
    console.log('Updated cart data:', updatedCart);

    // Validate the updated cart data
    const validatedCart = updatedCart.map(item => ({
      ...item,
      quantity: item.quantity || 1,
      productId: {
        ...item.productId,
        price: item.productId?.price || 0
      }
    })).filter(item => item.productId);

    setCartItems(validatedCart);
  } catch (error) {
    console.error('Error updating cart:', error);
  }
};

  return (
    <CartContext.Provider value={{ 
      cartItems: cartItems || [], 
      updateCart 
    }}>
      {children}
    </CartContext.Provider>
  );
};