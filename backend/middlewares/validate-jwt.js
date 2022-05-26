const jwt = require('jsonwebtoken');

const User = require('../models/user.model');

//Validate JWT 
const validateJWT = async (req, res, next) => {
    const token = req.header('xtoken')

    if (!token) {
        return res.status(401).json({
            msg: 'Access denied. No token provided'
        })
    }

    try {

        //uid of user from token
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        //Find user by id
        const user = await User.findById(uid)

        //Check if user exist
        if (!user) {
            return res.status(404).json({
                msg: 'User not found'
            })
        }

        //Verufy if user status is true
        if (!user.status) {
            return res.status(401).json({
                msg: 'Access denied. User deleted'
            })
        }

        requser = user

        next()
    } catch (error) {
        console.log(error)
        res.status(401).json({
            msg: 'Invalid token'
        })

    }
}

module.exports = { validateJWT }