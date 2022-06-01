const { Router } = require('express');
const { check, body } = require('express-validator');

const { validateField, validateJWT, isAdminRole } = require('../middlewares');

const {
    usersGet,
    userPost,
    userPut,
    userDelete,
    userGetById,
} = require('../controllers/user.controller');
const { existModelById, existModelDB } = require('../helpers/db-validator');
const User = require('../models/user.model');
const Course = require('../models/course.model.js');

const router = Router();

router.get('/', usersGet);

router.get(
    '/:id',
    [check('id', 'id is not mongoId').isMongoId(), validateField],
    userGetById
);

router.post(
    '/',
    [
        validateJWT,
        isAdminRole,
        check('fullName', 'fullName is required').not().isEmpty(),
        check(
            'password',
            'password is required and must be 6 characters length'
        ).isLength({ min: 6 }),
        check('email', 'invalid email').isEmail(),
        check('email').custom((email) => existModelDB(User, 'email', email)),
        body('courses').isArray(),
        body('courses.*').isMongoId(),
        body('courses.*').custom((course_id) =>
            existModelById(Course, course_id)
        ),
        check('role', 'inavalid role').isIn(['admin', 'teacher', 'student']),
        validateField,
    ],
    userPost
);

router.put(
    '/:id',
    [
        check('id', 'id is not mongoId').isMongoId(),
        body('courses.*').custom((course_id) =>
            existModelById(Course, course_id)
        ),
        validateField,
    ],
    userPut
);

router.delete(
    '/:id',
    [
        validateJWT,
        isAdminRole,
        check('id', 'id is not mongoId').isMongoId(),
        check('id').custom((id) => existModelById(User, id)),
        validateField,
    ],
    userDelete
);

module.exports = router;
