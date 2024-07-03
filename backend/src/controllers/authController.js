// src/controllers/authController.js
const User = require('../models/userModel');

const registerUser = (req, res) => {
    const { username, email, mobile, password } = req.body;

    User.create({ username, email, mobile, password }, (err, result) => {
        if (err) {
            console.error('Error registering user:', err);
            return res.status(500).json({ success: false, message: 'Registration failed' });
        }
        res.status(201).json({ success: true, message: 'Registration successful' });
    });
};

module.exports = { registerUser };
