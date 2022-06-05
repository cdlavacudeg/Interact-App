const { check, body } = require('express-validator');
const { Router } = require('express');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');
const {
    gradesGet,
    gradesPost,
    gradesDelete,
    gradesUpdate,
    gradesGetById,
} = require('../controllers/grades.controller.js');

const {
    existModelById,
    existModelByIdAndField,
} = require('../helpers/db-validator.js');

const { Course, Grade, User } = require('../models');

const router = Router();

router.get('/', gradesGet);
router.get(
    '/:id',
    [check('id', 'id is required').not().isEmpty(), validateField],
    gradesGetById
);

router.post(
    '/student/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'id is not mongoId').isMongoId(),
        check('course_id').custom((id) => existModelById(Course, id)),
        body('student_id', 'student_id is required').not().isEmpty(),
        body('student_id', 'student id is not mongoId').isMongoId(),
        body('student_id').custom((id) =>
            existModelByIdAndField(User, id, 'role', 'student')
        ),
        body('grade', 'grade is required').not().isEmpty(),
        body('grade', 'grade min 0 max 10 INT').isInt({ min: 0, max: 10 }),
        body('date', 'date is required').not().isEmpty(),
        body('date', 'date must be in format DD/MM/YYYY').isDate({
            format: 'DD/MM/YYYY',
        }),
        validateField,
    ],
    gradesPost
);
router.delete(
    '/:id',
    [
        validateJWT,
        isTeacherRole,
        check('id', 'id is required').not().isEmpty(),

        validateField,
    ],
    gradesDelete
);

router.put(
    '/:id',
    [
        validateJWT,
        isTeacherRole,
        check('id', 'id is required').not().isEmpty(),

        validateField,
    ],
    gradesUpdate
);

module.exports = router;
