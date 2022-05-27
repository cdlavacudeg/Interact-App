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

// Verify if course exist by id 
const existCourseById = async (id)=>{
    const existCourseID= await Course.findById(id)
    if(!existCourseID){
        throw new Error(`ID: course with ${id} does not exist`)
    }
}

// Possible general verification

const existModelById = async(Model,id)=>{
    const existModelID = await Model.findById(id)
    if(!existModelID){
        throw new Error(`ID: ${id} in ${Model.modelName} does not exist`)
    }
}

const existModelDB = async (Model,field='')=>{
    const modelC = await Model.findOne({field})
    if(modelC){
        throw new Error(`${Model.modelName}: ${field} alredy exists`)
    }
} 
module.exports = { 
    existEmailDB, 
    existUserById, 
    existCourse, 
    existCourseById,
    existModelById,
    existModelDB
}
