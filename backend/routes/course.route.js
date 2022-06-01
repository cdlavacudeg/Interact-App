const { Router } = require('express');
const {check,body}=require('express-validator');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');

const { coursesGet, courseGetById,coursePost, courseUpdate, courseDelete, courseGetStudents } = require('../controllers/course.controller.js');
const {existModelById,existModelDB,existModelByIdAndField} = require('../helpers/db-validator.js');
const {Course,User,Lesson} = require('../models')

const router = Router();

// general api operations
router.get('/', coursesGet)

router.post('/',[
    validateJWT,
    isTeacherRole,
    body('courseName','Course name is required').not().isEmpty(),
    body('courseName','Course name must be unique')
        .custom(courseName=>existModelDB(Course,'courseName',courseName)),
    body('description','Course description is required').not().isEmpty(),
    body('teacher','teacher is not mongoid').isMongoId(),
    body('teacher').custom(teacher=>existModelByIdAndField(User,teacher,'role','teacher')),
    body('students').isArray(),
    body('students.*').isMongoId(),
    body('students.*').custom(student=>existModelByIdAndField(User,student,'role','student')),
    validateField
],coursePost)

router.put('/:id',[
    validateJWT,
    isTeacherRole,
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Course,id)),
    body('courseName','Course name must be unique')
        .custom(courseName=>existModelDB(Course,'courseName',courseName)),
    body('teacher').if(body('teacher').exists())
        .custom(teacher=>existModelByIdAndField(User,teacher,'role','teacher')),
    body('students.*').if(body('students').exists())
        .custom(student=>existModelByIdAndField(User,student,'role','student')),
    body('lessons').if(body('lessons').exists()).isArray(),
    validateField
],courseUpdate)


router.delete('/:id',[
    validateJWT,
    isTeacherRole,
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Course,id)),
    validateField
],courseDelete)

// specific api operations

router.get('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Course,id)),
    validateField
],courseGetById)

router.get('/students/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Course,id)),
    validateField    
],courseGetStudents)

module.exports = router;
