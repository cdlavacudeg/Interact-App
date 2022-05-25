const Course= require('../models/course.model.js')
const ObjectId=require('mongodb').ObjectId

const coursesGet = async (req, res) => {
    const courses = await Course.find()
    res.json(courses)
}

const coursePost = async (req, res) => {
    let {...rest} = req.body
    try {
        const course = new Course({
            ...rest
        })
        await course.save()
        res.json({course})
    } catch (error) {
        console.error(`Error en coursePost:${error}`)
        res.json({
            "messague":error.message,
        })
    }    
}

module.exports = {
    coursesGet,
    coursePost
}
