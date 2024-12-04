const express = require('express');
const { body, validationResult } = require('express-validator');
const asyncHandler = require('express-async-handler');
const { loginUser, registerUser, getUserProfile } = require('../controllers/userControllers');
const { protect } = require('../middleware/authMiddleware');
const { changePassword } = require('../controllers/change-password');
const { deleteUser } = require('../controllers/delete');
const { isTokenValid } = require('../controllers/isTokenValid');
const router = express.Router();

// Rate Limiting
const rateLimit = require('express-rate-limit');
const loginLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: 5, // Max 5 requests per minute
  message: { success: false, message: 'Too many login attempts, please try again later' },
});

// Routes
router.post(
  '/login',
  loginLimiter,
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  asyncHandler(loginUser)
);

router.post(
  '/register',
  [
    body('email').isEmail().withMessage('Please provide a valid email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('name').notEmpty().withMessage('Name is required'),
  ],
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }

    const user = await registerUser(req.body);
    res.status(201).json({ success: true, message: 'User registered successfully', data: user });
  })
);

router.get('/isTokenValid', protect, asyncHandler(isTokenValid));
router.get('/profile', protect, asyncHandler(getUserProfile));
router.post(
  '/change-password',
  protect,
  [body('password').isLength({ min: 6 }).withMessage('New password must be at least 6 characters long')],
  asyncHandler(changePassword)
);
router.delete('/delete', protect, asyncHandler(deleteUser));

module.exports = router;
