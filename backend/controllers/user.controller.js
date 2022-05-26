const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId

const usersGet = async (req, res) => {
    const { limit, from } = req.query
    const query = { status: true }

    const [total, user] = await Promise.all([
        await User.countDocuments(query),
        await User.find(query)
            .skip(Number(from))
            .limit(Number(limit))
    ])

    res.json({
        total,
        user
    })
}

const userPost = async (req, res) => {
    const { password, courses, fullName, email, role } = req.body
    // const objIdcourses = courses.map(e => ObjectId(e))

    const user = new User({
        password,
        courses,
        fullName,
        email,
        role,
        courses
    })

    //Encrypt password
    const salt = bcryptjs.genSaltSync(10)
    user.password = bcryptjs.hashSync(password, salt)

    //Save user in DB
    await user.save()
    res.json({
        msg: `post API - User created`,
        user
    })
}

const userPut = async (req, res) => {
    const { id } = req.params
    const { password, role, ...rest } = req.body

    if (password) {
        const salt = bcryptjs.genSaltSync(10)
        rest.password = bcryptjs.hashSync(password, salt)
    }

    const user = await User.findByIdAndUpdate(id, rest)

    res.json({
        msg: `put API - User updated`,
        user
    })
}

const userDelete = async (req, res) => {
    const { id } = req.params
    const user = await User.findByIdAndUpdate(id, { status: false })

    res.json({
        msg: `delete API - User deleted`,
        user
    })
}

module.exports = {
    usersGet,
    userPost,
    userPut,
    userDelete
}
