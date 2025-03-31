const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/userModel.js'); // Adjust the path as necessary

const router = express.Router();
const SALT_ROUNDS = 10;

// Registration endpoint
router.post('/register', async (req, res) => {
    const { fullname, email, password } = req.body;

    if (!email || !password || !fullname) {
        return res.status(400).json({ message: "Please fill in all required fields." });
    }
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists!" });
        }
        
        const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
        console.log("Hashed password:", hashedPassword); // Debugging log

        const newUser = new User({ fullname, email, password: hashedPassword });


        console.log("Creating new user:", newUser);

        await newUser.save();

        return res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.error("Error during registration:", error);
        return res.status(500).json({ message: "Error registering user.", error: error.message });
    }
});


// Login endpoint
router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "User not found." });
        }
        // Compare hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid password." });
        }
    // // Compare plain password directly
    // if (user.password !== password) {
    //     return res.status(400).json({ message: "Invalid password." });
    // }
    // return res.status(200).json({ message: "Login successful!", user: { email, fullname: user.fullname } });
        return res.status(200).json({ message: "Login successful!", user: { email, fullname: user.fullname } });
    } catch (error) {
        console.error("Error during login:", error);
        return res.status(500).json({ message: "Error during login.", error: error.message });
    }
    });


router.get('/user/:email', async (req, res) => {
    const { email } = req.params;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
        return res.status(200).json({ email: user.email, fullname: user.fullname });
    } catch (error) {
        return res.status(500).json({ message: "Error retrieving user.", error });
    }
})

module.exports = router;
