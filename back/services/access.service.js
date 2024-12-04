'use strict';
const Customer = require('../models/User');
const bcrypt = require('bcrypt');

class AccessService {
  static signUp = async ({ name, email, password, tier }) => {
    try {
      // Input validation
      if (!name || !email || !password) {
        return {
          code: 400,
          message: 'Name, email, and password are required',
          status: 'error',
        };
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return {
          code: 400,
          message: 'Invalid email format',
          status: 'error',
        };
      }

      // Check if user exists
      const existingUser = await Customer.findOne({ where: { email } });
      if (existingUser) {
        return {
          code: 409,
          message: 'User already exists',
          status: 'error',
        };
      }

      // Hash password
      const saltRounds = parseInt(process.env.SALT_ROUNDS, 10) || 10;
      const passwordHash = await bcrypt.hash(password, saltRounds);

      // Create a new user
      const newUser = await Customer.create({
        name,
        email,
        password: passwordHash,
        tier, // Include 'tier' if necessary
      });

      // Return success response
      return {
        code: 201,
        message: 'User created successfully',
        status: 'success',
        user: {
          id: newUser.id,
          name: newUser.name,
          email: newUser.email,
          tier: newUser.tier,
        },
      };
    } catch (err) {
      // Log and return error
      console.error('Error during sign-up:', err);
      return {
        code: 500,
        message: 'Internal server error',
        status: 'error',
      };
    }
  };
}

module.exports = AccessService;
