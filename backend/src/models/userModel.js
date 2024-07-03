// src/models/userModel.js
const db = require('../config/db');

const User = {
    create: (userData, callback) => {
        const query = `INSERT INTO users (username, email, mobile, password) VALUES (?, ?, ?, ?)`;
        db.query(query, [userData.username, userData.email, userData.mobile, userData.password], callback);
    }
};

module.exports = User;
