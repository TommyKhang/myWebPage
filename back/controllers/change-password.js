const User = require("../models/User.js");
const { errorMessage, validateChangePasswordForm } = require("../validations/User.js");
const { hashedPassword, comparePassword } = require("../auth/auth.js");

// Handles user password change
const changePassword = async (req, res) => {
    const userInfo = req.body;
    try {
        if (validateChangePasswordForm(userInfo)) {
            // Logged in user
            const user = await User.findById(req.user);

            // Check if new password == old password
            const isSamePassword = await comparePassword(userInfo.password, user.password);

            if (isSamePassword) {
                res.status(400).json({
                    message: "Choose a new password.",
                });
            } else {
                // Hash the new password
                const hash = await hashedPassword(userInfo.password);

                // Update the password field
                await User.findByIdAndUpdate(
                    req.user,
                    { password: hash }
                );

                res.status(200).json({
                    message: "Password has been successfully updated.",
                });
            }
        } else {
            res.status(400).json({ message: errorMessage() });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { changePassword };
