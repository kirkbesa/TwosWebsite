const mongoose = require('mongoose');
const cors = require('cors');
const express = require('express');

const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');
const authRoutes = require('./routes/authRoutes');
const app = express();
const dbURI = 'mongodb+srv://adminbesa:admin@twosdatabase.4pdby.mongodb.net/twos-database?retryWrites=true&w=majority';


// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);
app.use('/api', authRoutes);

// MongoDB Connection
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB Cloud');
  app.listen(5000, () => {
    console.log('Server running on port 5000');
  });

}).catch(err => console.log(err));

