const User = require('../models/user.model')

//Verify if email exist in DB
const existEmailDB = async (email = '') => {
    const existEmail = await User.findOne({ email })
    if (existEmail) {
        throw new Error(`Email: ${email} already exist`)
    }
}
//Verify if userID exist in DB
const existUserById = async (id) => {
    const existUserID = await User.findById(id)
    if (!existUserID) {
        throw new Error(`ID: ${id} does not exist`)
    }
}


module.exports = { existEmailDB, existUserById }