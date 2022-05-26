const { Router } = require('express');
const {check}=require('express-validator');
const validateField=require('../middlewares/validate-field.js');

const { coursesGet, coursePost } = require('../controllers/course.controller');
const {existCourse} = require('../helpers/db-validator.js');


const router = Router();


router.get('/', coursesGet)

router.post('/',[
    check('courseName','Course name is required').not().isEmpty(),
    check('courseName','Course name must be unique').custom(existCourse),
    check('description','Course description is required').not().isEmpty(),
    check('teacher','Course teacher is required').not().isEmpty(),
    validateField
],coursePost)

module.exports = router;
