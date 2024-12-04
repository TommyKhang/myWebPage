const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { errorMessage, validateLoginForm } = require("../validations/User.js");
const { comparePassword } = require("../auth/auth.js");

// Handles user login
const loginUser = async (req, res) => {
    const userInfo = req.body;
    try {
        // If validateLoginForm is true
        if (validateLoginForm(userInfo)) {
            // Check if user exists
            const user = await User.findOne({ where: { email: userInfo.email } });
            // If user does not exist
            if (!user) {
                return res.status(404).json({
                    message: "User not found",
                });
            }
            // Check if password is correct
            const isMatch = await comparePassword(userInfo.password, user.password);
            if (isMatch) {
                // Login the user
                const token = jwt.sign(
                    { id: user.id },
                    process.env.ACCESS_TOKEN_SECRET
                );
                res.status(200).json({
                    token,
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        date: user.date,
                    },
                });
            } else {
                res.status(401).json({
                    message: "Invalid credentials.",
                });
            }
        } else {
            res.status(400).json({ message: errorMessage() });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { loginUser };
