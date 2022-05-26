const { Router } = require('express');
const {check}=require('express-validator');
const { validateField } = require('../middlewares');

const { coursesGet, courseGetById,coursePost, courseUpdate, courseDelete, courseGetStudents } = require('../controllers/course.controller.js');
const {existCourse,existCourseById} = require('../helpers/db-validator.js');
 

const router = Router();

// general api operations
router.get('/', coursesGet)

router.post('/',[
    check('courseName','Course name is required').not().isEmpty(),
    check('courseName','Course name must be unique').custom(existCourse),
    check('description','Course description is required').not().isEmpty(),
    check('teacher','Course teacher is required').not().isEmpty(),
    validateField
],coursePost)

router.put('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(existCourseById),
    validateField
],courseUpdate)


router.delete('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(existCourseById),
    validateField
],courseDelete)

// specific api operations

router.get('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(existCourseById),
    validateField
],courseGetById)

router.get('/students/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(existCourseById),
    validateField    
],courseGetStudents)

module.exports = router;
