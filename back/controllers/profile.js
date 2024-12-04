const User = require('../models/User.js');

// Handles user profile retrieval
const userProfile = async (req, res) => {
    const userID = req.user;
    try {
        const user = await User.findById(userID);
        res.status(200).json({
            user: {
                id: user._id,
                name: user.name,
                email: user.email,
                date: user.date,
            },
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { userProfile };
