// index.js

import express from 'express';
import dbConnect from './middleware/dbConnect.js'; // Import the dbConnect middleware
import authRoutes from './routes/authRoutes.js';

const app = express(); // Define app here

// Middleware
app.use(express.json());
app.use(dbConnect); // Use the dbConnect middleware before any routes

// Routes
app.use('/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
