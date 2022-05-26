const { Router } = require('express');
const {check}=require('express-validator');
const validateField=require('../middlewares/validate-field.js');

const { coursesGet, coursePost, courseUpdate, courseDelete } = require('../controllers/course.controller');
const {existCourse,existCourseById} = require('../helpers/db-validator.js');


const router = Router();


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

module.exports = router;
