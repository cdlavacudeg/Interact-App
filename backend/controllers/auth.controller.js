const User = require('../models/user.model');
const bcryptjs = require('bcryptjs');
const { generateJWT } = require('../helpers/generate-JWT');
const response = require('../helpers/response.js');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        //Verify if email exist in DB
        const user = await User.findOne({ email });
        if (!user) {
            return response.error(req, res, 'Incorrect email or password', 400);
        }

        //Verify user status
        if (!user.status) {
            return response.error(req, res, 'Incorrect email or password', 400);
        }

        //Verify if password is correct
        const isMatch = await bcryptjs.compare(password, user.password);
        if (!isMatch) {
            return response.error(req, res, 'Incorrect email or password', 400);
        }

        //Generate JWT
        const token = await generateJWT(user.id);

        response.success(req, res, 'User Loged in', { user, token });
    } catch (error) {
        console.log(error);
        return response.error(req, res, 'Internal server error', 500);
    }
};

module.exports = {
    login,
};
