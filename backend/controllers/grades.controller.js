const grades = require('../models/grade.model');
const mongodb = require('mongodb');
const ObjectId = mongodb.ObjectId;
const response = require('../helpers/response.js');

const gradesGet = async (req, res) => {
    const grade = await grades.find();
    response.success(req, res, 'get API - list of grades', { grade });
};

const gradesPost = async (req, res) => {
    const { grade, obs, ...rest } = req.body;
    try {
        const gradesUser = new grades({
            ...rest,
            obs,
            grade,
        });
        await gradesUser.save();

        response.success(req, res, 'post API - Grade created', {
            grade: gradesUser,
        });
    } catch (error) {
        console.error(`Error en userPost:${error}`);
        response.error(req, res, 'Error creating a grade');
    }
};

const gradesDelete = async (req, res) => {
    const { id } = req.params;

    const gradesDelete = await grades.findByIdAndDelete(id);
    response.success(req, res, 'delete API - Grade deleted', {
        grade: gradesDelete,
    });
};

const gradesUpdate = async (req, res) => {
    const { id } = req.params;
    const { ...rest } = req.body;

    const gradeUpdate = await grades.findByIdAndUpdate(id, rest, { new: true });
    response.success(req, res, 'put API - Grade updated', { gradeUpdate });
};
const gradesGetById = async (req, res) => {
    const { id } = req.params;
    const grade = await grades.findById(id);
    response.success(req, res, 'get API - Grade by id', { grade });
};

module.exports = {
    gradesGet,
    gradesPost,
    gradesDelete,
    gradesUpdate,
    gradesGetById,
};
