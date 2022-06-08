const { Router } = require('express');
const { check, body } = require('express-validator');
const { Lesson, Course } = require('../models');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');

const {
    lessonsGet,
    lessonPost,
    lessonUpdate,
    lessonDelete,
} = require('../controllers/lesson.controller.js');
const {
    existModelById,
    existModelByIdAndField,
} = require('../helpers/db-validator.js');

const router = Router();

router.get('/', lessonsGet);

router.post(
    '/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'course id is not mongoId').isMongoId(),
        body('title', 'title is required').not().isEmpty(),
        body('link', 'link is required').not().isEmpty(),
        validateField,
    ],
    lessonPost
);

router.put(
    '/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'course_id is not mongoId').isMongoId(),
        check('course_id').custom((id) => existModelById(Course, id)),
        body('index', 'index is required').not().isEmpty(),
        validateField,
    ],
    lessonUpdate
);

router.delete(
    '/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'id is not mongoId').isMongoId(),
        check('course_id').custom((id) => existModelById(Course, id)),
        check('index', 'index is required').not().isEmpty(),
        validateField,
    ],
    lessonDelete
);

module.exports = router;
