require("dotenv").config();
require('express-async-errors');

const connectDB = require("./backend/backend-js/db/connect");  // UBAH PATH INI
const express = require("express");
const cors = require('cors')
const app = express();

// PENTING: Tambahkan body parser SEBELUM routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: [
    'http://localhost:5173',   // Vite dev server
    'http://127.0.0.1:5173',   // Local development
    'http://localhost:3000'    // Fallback port
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Debug middleware
app.use((req, res, next) => {
  console.log(`Received ${req.method} request to ${req.path}`);
  console.log('Headers:', req.headers);
  console.log('Body:', req.body);
  next();
});

const mainRouter = require("./backend/backend-js/routes/user");  // UBAH PATH INI
app.use("/api/v1", mainRouter);

// Error handling middleware
// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error Full Details:', {
    message: err.message,
    name: err.name,
    stack: err.stack,
    code: err.code
  });
  
  res.status(500).json({ 
    msg: 'Internal Server Error', 
    error: err.message,
    details: process.env.NODE_ENV === 'development' ? err.stack : {}
  });
});


// Fallback route handler
app.use((req, res) => {
  console.log('Unhandled route:', req.path);
  res.status(404).json({ msg: 'Route not found' });
});

const port = process.env.PORT || 3000;

const start = async () => {
    try {        
        await connectDB(process.env.MONGO_URI);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        })
    } catch (error) {
       console.log(error); 
    }
}

start();
