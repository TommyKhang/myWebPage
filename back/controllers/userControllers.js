// controllers/userController.js
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/User'); // Adjust the path as necessary

// @desc    Authenticate user & get token
// @route   POST /api/users/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ where: { email } });

    if (user && (await bcrypt.compare(password, user.password))) {
      // Generate JWT Token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });

      return res.status(200).json({
        success: true,
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          // Include other user details as needed
        },
      });
    }  res.status(401).json({ success: false, message: 'Invalid email or password' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// @desc    Register a new user
// @route   POST /api/users/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password, phoneNumber } = req.body;

    // Check if user exists
    const userExists = await User.findOne({ where: { email } });

    if (userExists) {
      return res.status(400).json({success: false, message: 'User already exists' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
    });

    // Generate JWT Token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        // Include other user details as needed
      },
    });
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
const getUserProfile = async (req, res) => {
  try {
    const user = await User.findByPk(req.user.id, {
      attributes: { exclude: ['password'] },
    });

    if (user) {
      return res.status(200).json({ success: true, data: user });
    }
    res.status(404).json({ success: false, message: 'User not found' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};


// @desc Change user password
const changePassword = async (req, res) => {
  try {
    const { password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);
    await User.update({ password: hashedPassword }, { where: { id: req.user.id } });

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

// @desc Delete user account
const deleteUser = async (req, res) => {
  try {
    await User.destroy({ where: { id: req.user.id } });
    res.status(200).json({ success: true, message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = { loginUser, registerUser, getUserProfile };
