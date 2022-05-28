const { check } = require('express-validator')
const { Router } = require('express');
const { validateField, isTeacherRole , validateJWT} = require('../middlewares');
const {gradesGet, gradesPost, gradesDelete, gradesUpdate, gradesGetById} = require('../controllers/grades.controller.js')
const router = Router();

router.get('/', gradesGet )
router.get('/:id', [
    check('id', 'id is required').not().isEmpty(),
    check('grade', 'grades is required').not().isEmpty(),
    validateField
], gradesGetById )
router.post('/',  [
    validateJWT,
    isTeacherRole,
    check ('course', 'course is required').not().isEmpty(),
    check('grade', 'grades is required').not().isEmpty(),
    check('user', 'user is required').not().isEmpty(),
    validateField
], gradesPost)
router.delete('/:id', [
    validateJWT,
    isTeacherRole,
    check('id', 'id is required').not().isEmpty(),
    validateField
], gradesDelete)
router.put('/:id',[
    validateJWT,
    isTeacherRole,
    check('id', 'id is required').not().isEmpty(),
    validateField
] ,gradesUpdate)


module.exports = router;
