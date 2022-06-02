const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-JWT');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        //Verify if email exist in DB
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({
                ok: false,
                message: 'Incorrect email or password',
            });
        }

        //Verify user status
        if (!user.status) {
            return res.status(400).json({
                message: 'Incorrect email or password',
            });
        }

        //Verify if password is correct
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                message: 'Incorrect email or password',
            });
        }

        //Generate JWT
        const token = await generateJWT(user.id);

        res.json({
            user,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Internal server error',
        });
    }
};

module.exports = {
    login,
};
