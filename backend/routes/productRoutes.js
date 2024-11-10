const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();

// Fetch products by category
router.get('/category/:category', async (req, res) => {
  const { category } = req.params;
  try {
    const products = await Product.find({ category: category });
    res.json(products); // Send JSON response
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a product (you can test this route with Postman)
router.post('/', async (req, res) => {
  const { name, description, price, imageUrl } = req.body;
  try {
    const newProduct = new Product({ name, description, price, imageUrl });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }

});

module.exports = router;