const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')


const usersGet = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const userPost = async (req, res) => {
    const { password, ...rest } = req.body

    const user = new User(rest, password)
    const salt = bcryptjs.genSaltSync(10)
    user.password = bcryptjs.hashSync(password, salt)


    // await user.save()

    res.json(user)
}



module.exports = {
    usersGet,
    userPost
}