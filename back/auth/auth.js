const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Hash user password and save to database
const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    return hashed;
};

// Check if password matche
const comparePassword = async (password, userPassword) => {
    const isMatch = await bcrypt.compare(password, userPassword);
    return isMatch;
};

// Protect private routes from unauthorized access
const authorizedRoutes = async (req, res, next) => {
    try {
        let userToken;

        if (req.header("Authorization")) {
            userToken = req.header("Authorization").replace("Bearer ", "");
        }

        if (userToken) {
            const verifyToken = jwt.verify(
                userToken,
                process.env.ACCESS_TOKEN_SECRET
            );

            const user = await User.findById(verifyToken.id);

            if (user) {
                req.user = user._id;
                next();
            } else {
                return res.status(403).json({
                    message: "There is no current user that this token is attached to.",
                });
            }
        } else {
            res.status(401).json({
                message: "You are not authorized to access this page.",
            });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    hashedPassword,
    comparePassword,
    authorizedRoutes,
};
