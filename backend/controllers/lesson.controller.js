const Lesson = require('../models/lesson.model.js');
const response = require('../helpers/response.js');

const lessonsGet = async (req, res) => {
    const { limit, from } = req.query;

    const [total, lesson] = await Promise.all([
        await Lesson.countDocuments(),
        await Lesson.find().skip(Number(from)).limit(Number(limit)),
    ]);

    response.success(req, res, 'get API - list of lessons', { total, lesson });
};

const lessonPost = async (req, res) => {
    const { course_id: id} = req.params
    const { title, link } = req.body;

    try {
        const lesson = await Lesson.findOne({course_id:id})
        lesson.lectures.push({
            title,
            link
        });

        await lesson.save();

        response.success(req, res, 'Post API - Lesson created', { lesson });
    } catch (error) {
        console.error(`Error en lessonPost:${error}`);
        response.error(req, res, 'Error creating a Lesson');
    }
};

const lessonUpdate = async (req, res) => {
    const { id } = req.params;
    const { course_id, ...rest } = req.body;

    const lesson = await Lesson.findByIdAndUpdate(id, rest, { new: true });

    response.success(req, res, 'put API - Lesson updated', { lesson });
};

const lessonDelete = async (req, res) => {
    const { id } = req.params;

    const lesson = await Lesson.findByIdAndDelete(id);
    response.succes(req, res, 'delete API - Lesson deleted', { lesson });
};

module.exports = {
    lessonsGet,
    lessonPost,
    lessonUpdate,
    lessonDelete,
};
