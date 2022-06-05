const jwt = require('jsonwebtoken');
const response = require('../helpers/response.js')
const User = require('../models/user.model');

//Validate JWT
const validateJWT = async (req, res, next) => {
    const token = req.header('xtoken');

    if (!token) {
        return response.error(req,res,'Access denied. No token provided',401)
    }

    try {
        //uid of user from token
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

        //Find user by id
        const user = await User.findById(uid);

        //Check if user exist
        if (!user) {
            return response.error(req,res,'User not found',404)
        }

        //Verufy if user status is true
        if (!user.status) {
            return response.error(req,res,'Access denied. User deleted',401)
        }

        req.user = user;

        next();
    } catch (error) {
        console.log(error);
        response.error(res,req,'Invalid token',401)
    }
};

module.exports = { validateJWT };
