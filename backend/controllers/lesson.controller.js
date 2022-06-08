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
    const { course_id: id } = req.params;
    const { title, link } = req.body;

    try {
        const lesson = await Lesson.findOne({ course_id: id });
        lesson.lectures.push({
            title,
            link,
        });

        await lesson.save();

        response.success(req, res, 'Post API - Lesson created', { lesson });
    } catch (error) {
        console.error(`Error en lessonPost:${error}`);
        response.error(req, res, 'Error creating a Lesson');
    }
};

const lessonUpdate = async (req, res) => {
    try {
        const { course_id } = req.params;
        let { index, title, link } = req.body;
        index = parseInt(index);
        const lesson = await Lesson.findOne({ course_id });
        if (title) lesson.lectures[index].title = title;
        if (link) lesson.lectures[index].link = link;
        const updateLesson = await lesson.save();

        response.success(req, res, 'put API - Lesson updated', {
            lesson: updateLesson,
        });
    } catch (error) {
        console.error(`Error en lessonUpdate:${error}`);
        response.error(req, res, 'Error updating a Lesson');
    }
};

const lessonDelete = async (req, res) => {
    const { course_id } = req.params;
    let { index } = req.body;
    index = parseInt(index);
    try {
        const lesson = await Lesson.findOne({ course_id });
        let newlesson;
        if (lesson.lectures[index]) {
            lesson.lectures.splice(index, 1);
            newlesson = await lesson.save();
        } else {
            throw new Error('Wrong index');
        }

        response.success(req, res, 'delete API - Lesson deleted', {
            lesson: newlesson,
        });
    } catch (error) {
        console.error(`Error en lessonDelete:${error}`);
        response.error(req, res, `Error deleting a Lesson:${error.message}`);
    }
};

module.exports = {
    lessonsGet,
    lessonPost,
    lessonUpdate,
    lessonDelete,
};
