const jwt = require('jsonwebtoken');
const User = require('../models/User');

// Handle token validation
const isTokenValid = async (req, res) => {
    try {
        const authHeader = req.header('Authorization');
        if (!authHeader) return res.status(401).json(false);

        const userToken = authHeader.replace('Bearer ', '');
        if (!userToken) return res.status(401).json(false);

        const verifyToken = jwt.verify(userToken, process.env.ACCESS_TOKEN_SECRET);
        if (!verifyToken) return res.status(401).json(false);

        const user = await User.findById(verifyToken.id);
        if (!user) return res.status(404).json(false);

        return res.status(200).json(true);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

module.exports = { isTokenValid };
