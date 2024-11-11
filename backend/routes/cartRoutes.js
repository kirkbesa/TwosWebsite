const express = require('express');
const CartItem = require('../models/cartModel');
const Product = require('../models/productModel'); // Make sure to import your Product model
const router = express.Router();

// Cart Route - Ensure product details are populated
router.get('/', async (req, res) => {
  try {
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Remove from Cart
router.delete('/remove', async (req, res) => {
  const { productId } = req.body;
  console.log('Attempting to remove product with ID:', productId);

  try {
    const cartItem = await CartItem.findOne({ productId });
    if (!cartItem) {
      return res.status(404).json({ message: 'Item not found in cart' });
    }

    // Decrement the quantity if it's more than 1
    if (cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      await cartItem.save();
    } else {
      // If the quantity is 1, remove the item entirely
      await CartItem.deleteOne({ productId });
    }

    // Return the updated cart
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  } catch (error) {
    console.error('Error removing from cart:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Add to Cart
router.post('/add', async (req, res) => {
  const { productId } = req.body;
  try {
    const existingItem = await CartItem.findOne({ productId });
    if (existingItem) {
      existingItem.quantity += 1;
      await existingItem.save();
    } else {
      const newCartItem = new CartItem({ productId });
      await newCartItem.save();
    }

    // Return updated cart
    const cartItems = await CartItem.find().populate('productId');
    res.json(cartItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;