const User = require('../models/user.model')
const bcryptjs = require('bcryptjs')
const mongodb= require('mongodb')
const ObjectId=mongodb.ObjectId

const usersGet = async (req, res) => {
    const users = await User.find()
    res.json(users)
}

const userPost = async (req, res) => {
    const { password, courses,...rest } = req.body
    const objIdcourses = courses.map(e=>ObjectId(e))
    try {
        const user = new User({
            ...rest, 
            password,
            courses:objIdcourses
        })
        const salt = bcryptjs.genSaltSync(10)
        user.password = bcryptjs.hashSync(password, salt)
        await user.save()
        res.json({user})
    } catch (error) {
        console.error(`Error en userPost:${error}`)
        res.json({
            "messague":error.message,
        })
    }    
}

module.exports = {
    usersGet,
    userPost
}
