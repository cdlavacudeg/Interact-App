const Classification = require('../models/classification.model')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId

const classificationGet = async (req, res) => {
    const classification = await Classification.find()
    res.json(classification)
}

const classificationPost = async (req, res) => {
    const {note,...rest } = req.body
    try {
        const classificationUser = new Classification({
            ...rest, 
            note
        })
        await classificationUser.save()
        res.json({ classificationUser })
    } catch (error) {
        console.error(`Error en userPost:${error}`)
        res.json({
            "messague": error.message,
        })
    }
}

module.exports = {
    classificationGet,
    classificationPost
}
