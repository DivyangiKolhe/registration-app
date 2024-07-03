// server.js
const express = require('express');
const cors = require('cors');

const bodyParser = require('body-parser');
const authRoutes = require('./src/routes/authRoutes');
require('dotenv').config();
const db = require('./src/config/db'); // Initialize the database connection

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});