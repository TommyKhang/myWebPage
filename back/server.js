const express = require('express');
const cors = require('cors');
const sequelize = require('./utilities/Database'); // Sequelize instance for database connection
const userRoutes = require('./routes/users'); // User routes
const productRoutes = require('./routes/products'); //product routes

require('dotenv').config(); // Load environment variables

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable CORS for cross-origin requests

// Test the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

// API Routes
app.use('/api/users', userRoutes); // User-related routes
app.use('/api/products', productRoutes); // Example product-related routes

// Health check endpoint (useful for monitoring and debugging)
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'OK',
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode).json({
    message: err.message || 'Internal Server Error',
    stack: process.env.NODE_ENV === 'production' ? undefined : err.stack, // Hide stack trace in production
  });
});

// Test route for basic API functionality
app.get('/helloworld', (req, res) => {
  console.log('Có đứa request lên server');
  res.json({ message: 'Hello, World!' });
});

// Server listening
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
