const Classification = require('../models/classification.model')
const mongodb = require('mongodb')
const ObjectId = mongodb.ObjectId

const classificationGet = async (req, res) => {
    const classification = await Classification.find()
    res.json(classification)
}

const classificationPost = async (req, res) => {
    const { note , user, ...rest } = req.body
    const objIdClassification = courses.map(e => ObjectId(e))
    try {
        const classificationUser = new Classification({
            ...rest,
            user,
            note,
            idClassification: objIdClassification
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
