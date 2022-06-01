const { Router } = require('express');
const { check, body } = require('express-validator');
const Lesson = require('../models/lesson.model.js');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');

const {
    lessonsGet,
    lessonPost,
    lessonUpdate,
    lessonDelete,
} = require('../controllers/lesson.controller.js');
const { existModelById } = require('../helpers/db-validator.js');

const router = Router();

router.get('/', lessonsGet);

router.post(
    '/',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'course id is required').not().isEmpty(),
        check('course_id', 'course id is not mongoId').isMongoId(),
        check('course_id').custom((course) => {
            const lessonS = Lesson.find({ course_id: course });
            if (lessonS) {
                throw new Error('Course_id must be unique');
            }
            return false;
        }),
        body('lectures', 'lectures is not an array')
            .if(body('lectures').exists())
            .isArray(),
        body('lectures.*', 'lecture in array is not an Object')
            .if(body('lectures').exists())
            .isObject(),
        body('lectures.*')
            .if(body('lectures').exists())
            .custom((lecture) => {
                const title = Object.prototype.hasOwnProperty.call(
                    lecture,
                    'title'
                );
                const link = Object.prototype.hasOwnProperty.call(
                    lecture,
                    'link'
                );
                if (!title) {
                    throw new Error('Title required');
                } else if (!link) {
                    throw new Error('Link required');
                }
                return true;
            }),
        validateField,
    ],
    lessonPost
);

router.put(
    '/:id',
    [
        validateJWT,
        isTeacherRole,
        check('id', 'id is not mongoId').isMongoId(),
        check('id').custom((id) => existModelById(Lesson, id)),
        body('lectures', 'lectures is not an array')
            .if(body('lectures').exists())
            .isArray(),
        body('lectures.*', 'lecture in array is not an Object')
            .if(body('lectures').exists())
            .isObject(),
        body('lectures.*')
            .if(body('lectures').exists())
            .custom((lecture) => {
                const title = Object.prototype.hasOwnProperty.call(
                    lecture,
                    'title'
                );
                const link = Object.hasOwnProperty.call(lecture, 'link');
                if (!title) {
                    throw new Error('Title required');
                } else if (!link) {
                    throw new Error('Link required');
                }
                return true;
            }),
        validateField,
    ],
    lessonUpdate
);

router.delete(
    '/:id',
    [
        validateJWT,
        isTeacherRole,
        check('id', 'id is not mongoId').isMongoId(),
        check('id').custom((id) => existModelById(Lesson, id)),
        validateField,
    ],
    lessonDelete
);

module.exports = router;
