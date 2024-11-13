const mongoose = require("mongoose");
const cors = require("cors");
const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("./models/User");
const authRoutes = require("./routes/authRoutes");

const productRoutes = require("./routes/productRoutes");
const cartRoutes = require("./routes/cartRoutes");
const app = express();

const dbURI =
  "mongodb+srv://adminbesa:admin@twosdatabase.4pdby.mongodb.net/twos-database?retryWrites=true&w=majority";

app.use(cors());
app.use(express.json());

app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api", authRoutes);

app.post("/api/register", async (req, res) => {
  const { fullName, email, username, password, confirmPassword } = req.body;

  if (!fullName || !email || !username || !password || !confirmPassword) {
    return res.status(400).json({ message: "All fields are required." });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ message: "Passwords do not match." });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      fullName,
      email,
      username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json({ message: "User registered successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error.", error: err.message });
  }
});

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB Cloud");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => console.log(err));
