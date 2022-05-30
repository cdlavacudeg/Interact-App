const grades = require('../models/grade.model')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId

const gradesGet = async (req, res) => {
    const grade = await grades.find()
    res.json(grade)
}

const gradesPost = async (req, res) => {
    const {grade, obs,...rest } = req.body
    try {
        const gradesUser = new grades({
            ...rest, 
            obs,
            grade, 
        })
        await gradesUser.save()
        res.json({ gradesUser })
    } catch (error) {
        console.error(`Error en userPost:${error}`)
        res.json({
            "messague": error.message,
        })
    }
}

const gradesDelete = async (req, res) => {
    const { id } = req.params

    const gradesDelete = await grades.findByIdAndDelete(id)
    res.json({
        msg: 'delete API - Grades deleted',
        gradesDelete
    })
}

const gradesUpdate = async (req, res) => {
    const { id } = req.params
    const {...rest} = req.body

    const gradeUpdate = await grades.findByIdAndUpdate(id,rest, { new: true })
    res.json({
        msg: 'put API - grades updated',
        gradeUpdate
    })
}
const gradesGetById = async (req, res) => {
    const { id } = req.params
    const grade = await grades.findById(id)
    res.json({
        grade
    })
}


module.exports = {
    gradesGet,
    gradesPost,
    gradesDelete,
    gradesUpdate,
    gradesGetById
}
