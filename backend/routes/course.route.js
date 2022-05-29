const { Router } = require('express');
const {check,body}=require('express-validator');
const { validateField } = require('../middlewares');

const { coursesGet, courseGetById,coursePost, courseUpdate, courseDelete, courseGetStudents } = require('../controllers/course.controller.js');
const {existModelById,existModelDB} = require('../helpers/db-validator.js');
const Course = require('../models/course.model')

const router = Router();

// general api operations
router.get('/', coursesGet)

router.post('/',[
    check('courseName','Course name is required').not().isEmpty(),
    check('courseName','Course name must be unique')
        .custom(courseName=>existModelDB(Course,'courseName',courseName)),
    check('description','Course description is required').not().isEmpty(),
    check('teacher').if(body('teacher').not().isEmpty()).isMongoId(),
    validateField
],coursePost)

router.put('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Course,id)),
    validateField
],courseUpdate)


router.delete('/:id',[
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
