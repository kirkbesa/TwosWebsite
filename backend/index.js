const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;
const burgers = require('./data/burgers');
const ricemeals = require('./data/ricemeals');
const pastas = require('./data/pastas');
const extras = require('./data/extras');

app.use(cors());
app.use(express.json()); // To handle JSON data


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// //---------- Get all products
// app.get('/products', (req, res) => {
//   res.json(products);
// });

// // Get a specific product by ID
// app.get('/products/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (!product) {
//     return res.status(404).json({ message: 'Product not found' });
//   }
//   res.json(product);
// });

// ---------Get all burgers
app.get('/burgers', (req, res) => {
    res.json(burgers);
  });
  
  // Get a specific burger by ID
  app.get('/burgers/:id', (req, res) => {
    const burgerId = parseInt(req.params.id);
    const burger = burgers.find(b => b.id === burgerId);
  
    if (!burger) {
      return res.status(404).json({ message: 'Burger not found' });
    }
    res.json(burger);
  });

// ---------Get all rice meals
app.get('/ricemeals', (req, res) => {
    res.json(ricemeals);
  });
  
  // Get a specific rice meal by ID
  app.get('/ricemeals/:id', (req, res) => {
    const ricemealId = parseInt(req.params.id);
    const ricemeal = ricemeals.find(r => r.id === ricemealId);
  
    if (!ricemeal) {
      return res.status(404).json({ message: 'Rice Meal not found' });
    }
    res.json(ricemeal);
  });

// ---------Get all pastas
app.get('/pastas', (req, res) => {
    res.json(pastas);
  });
  
  // Get a specific pasta by ID
  app.get('/pastas/:id', (req, res) => {
    const pastaId = parseInt(req.params.id);
    const pasta = pastas.find(p => p.id === pastaId);
  
    if (!pasta) {
      return res.status(404).json({ message: 'Pasta not found' });
    }
    res.json(pasta);
  });

// ---------Get all extras
app.get('/extras', (req, res) => {
    res.json(extras);
  });
  
  // Get a specific extra by ID
  app.get('/extras/:id', (req, res) => {
    const extraId = parseInt(req.params.id);
    const extra = extras.find(e => e.id === extraId);
  
    if (!extra) {
      return res.status(404).json({ message: 'Extra not found' });
    }
    res.json(extra);
  });


// -------CART 
let cart = [];

// Get cart items
app.get('/cart', (req, res) => {
    console.log("Cart Items: ", cart);
  res.json(cart);
});

const products = [
    ...burgers,
    ...ricemeals,
    ...pastas,
    ...extras
];

// Add a product to the cart
app.post('/cart', (req, res) => {
    const { id, quantity } = req.body;
    const product = products.find(p => p.id === id); // Search in the combined products array

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    
    // Check if product is already in the cart
    const cartItem = cart.find(item => item.product.id === id);
    if (cartItem) {
        cartItem.quantity += quantity;
    } else {
        cart.push({ product, quantity });
    }

    res.json(cart);
});


app.delete('/cart/:id', (req, res) => {
    const productId = parseInt(req.params.id); // Get the ID from the URL
    const cartItem = cart.find(item => item.product.id === productId);

    if (!cartItem) {
        return res.status(404).json({ message: 'Cart item not found' });
    }

    // If the item exists but its quantity is 0, we return without making any changes
    if (cartItem.quantity <= 0) {
        return res.status(400).json({ message: 'Cannot remove item with quantity 0' });
    }

    // Remove item if quantity is more than 0
    if (cartItem.quantity > 0) {
        cartItem.quantity -= 1; // Decrement quantity
    }

    // If quantity becomes 0 after decrementing, remove the item from cart
    if (cartItem.quantity === 0) {
        cart = cart.filter(item => item.product.id !== productId);
    }

    res.json(cart); // Return updated cart
});