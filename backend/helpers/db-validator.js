const User = require('../models/user.model')
const Course = require('../models/course.model.js')
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

// Verify if courseName exist in DB
const existCourse = async (courseName = '') => {
    const course = await Course.findOne({ courseName })
    if (course) {
        throw new Error(`Course: ${courseName} already exist`)
    }
}
module.exports = { existEmailDB, existUserById, existCourse }
