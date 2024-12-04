const { errorMessage, validateRegisterForm } = require("../validations/User.js");
const { hashedPassword } = require("../auth/auth.js");
const User = require('../models/User');

const registerUser = async (req, res) => {
    const user = req.body;
    try {
        // Validate the registration form
        const isValid = await validateRegisterForm(user);
        if (isValid) {
            // The form is valid => hash the password
            const hash = await hashedPassword(user.password);
            const { name, email } = user;

            // Check if email is registered or not
            const existingUser = await User.findOne({ where: { email } });
            if (existingUser) {
                return res.status(400).json({ message: "Email already registered" });
            }

            // Create the user
            const newUser = await User.create({
                name,
                email,
                password: hash,
            });

            res.status(201).json({
                id: newUser.id,
                name: newUser.name,
                email: newUser.email,
            });
        } else {
            res.status(400).json({ message: errorMessage() });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser };
