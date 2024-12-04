const User = require('../models/User.js'); // Adjust the path as necessary
let message = '';

const errorMessage = () => message;

// Password validation
function passwordValidation(password) {
  const passwordCriteria = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  return passwordCriteria.test(password);
}

// Login validation
const validateLoginForm = (formInfo) => {
  const { email, password } = formInfo;
  // Check missing fields
  if (!email || !password) {
    message = 'Please fill in all fields';
    return false;
  }
  return true;
};

// Register form validation
const validateRegisterForm = async (formInfo) => {
  const { name, email, password, confirmPassword } = formInfo;
  // Check missing fields
  if (!name || !email || !password || !confirmPassword) {
    message = 'Please fill in all fields';
    return false;
  }
  // Check if email is already registered
  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      message = 'Email already registered';
      return false;
    }
  } catch (error) {
    message = 'Error checking email registration';
    return false;
  }
  // Validate password
  const isPasswordValid = passwordValidation(password);
  if (!isPasswordValid) {
    message =
      'Invalid Password! Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and be between 6 to 20 characters long';
    return false;
  }
  if (password !== confirmPassword) {
    message = 'Passwords do not match';
    return false;
  }
  return true;
};

// Change password form validation
const validateChangePasswordForm = (formInfo) => {
  const { password, confirmPassword } = formInfo;
  // Check missing fields
  if (!password || !confirmPassword) {
    message = 'Please fill in all fields';
    return false;
  }
  // Validate password
  const isPasswordValid = passwordValidation(password);
  if (!isPasswordValid) {
    message =
      'Invalid Password! Password must contain at least 1 number, 1 uppercase letter, 1 lowercase letter, and be between 6 to 20 characters long';
    return false;
  }
  if (password !== confirmPassword) {
    message = 'Passwords do not match';
    return false;
  }
  return true;
};

module.exports = {
  errorMessage,
  validateLoginForm,
  validateRegisterForm,
  validateChangePasswordForm,
};
