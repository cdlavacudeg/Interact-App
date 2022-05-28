const { Router } = require('express');
const { check } = require('express-validator');

const { validateField, validateJWT, isAdminRole } = require('../middlewares');

const { usersGet, userPost, userPut, userDelete } = require('../controllers/user.controller');
const { existModelById,existModelDB } = require('../helpers/db-validator');
const User = require('../models/user.model')


const router = Router();

router.get('/', usersGet)

router.post('/', [
    check('fullName', 'fullName is required').not().isEmpty(),
    check('password', 'password is required and must be 6 characters length').isLength({ min: 6 }),
    check('email', 'invalid email').isEmail(),
    check('email').custom(email=>existModelDB(User,email)),
    check('role', 'inavalid role').isIn(['admin', 'teacher', 'student']),
    validateField
], userPost)

router.put('/:id', [
    check('id', 'id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(User,id)),
    validateField
], userPut)

router.delete('/:id', [
    validateJWT,
    isAdminRole,
    check('id', 'id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(User,id)),
    validateField
], userDelete)

module.exports = router;
