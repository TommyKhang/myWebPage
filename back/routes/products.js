const express = require('express');
const { query, param, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const Product = require('../models/Product'); // Adjust path as needed

const router = express.Router();

// GET / - Retrieve all products with pagination, sorting, and filtering
router.get(
  '/',
  [
    query('page').optional().isInt({ min: 1 }).withMessage('Page must be a positive integer'),
    query('limit').optional().isInt({ min: 1 }).withMessage('Limit must be a positive integer'),
    query('sortBy').optional().isIn(['name', 'price']).withMessage('Invalid sort field'),
    query('order').optional().isIn(['asc', 'desc']).withMessage('Order must be "asc" or "desc"'),
  ],
  asyncHandler(async (req, res) => {
    const { page = 1, limit = 10, sortBy = 'name', order = 'asc' } = req.query;

    const products = await Product.findAll({
      offset: (page - 1) * limit,
      limit: parseInt(limit),
      order: [[sortBy, order.toUpperCase()]],
    });

    res.status(200).json({ success: true, data: products });
  })
);

// GET /:id - Retrieve a product by ID
router.get(
  '/:id',
  [
    param('id').isInt().withMessage('Product ID must be an integer'),
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const productId = req.params.id;
    const product = await Product.findByPk(productId);

    if (product) {
      res.status(200).json({ success: true, data: product });
    } else {
      res.status(404).json({ success: false, message: 'Product not found' });
    }
  })
);

module.exports = router;
