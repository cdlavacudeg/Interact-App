const {Router}=require('express')
const {check} = require('express-validator')
const Lesson = require('../models/lesson.model.js')
const {validateField}= require('../middlewares')

const {lessonsGet,lessonPost,lessonUpdate,lessonDelete}=require('../controllers/lesson.controller.js')
const {existModelById} =require('../helpers/db-validator.js')

const router = Router()

router.get('/',lessonsGet)

router.post('/',[
    check('course_id','course id is required').not().isEmpty(),
    check('course_id','course id is not mongoId').isMongoId(),
    check('content','content is required').not().isEmpty(),
    validateField
],lessonPost)


router.put('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Lesson,id)),
    validateField
],lessonUpdate)

router.delete('/:id',[
    check('id','id is not mongoId').isMongoId(),
    check('id').custom(id=>existModelById(Lesson,id)),
    validateField
],lessonDelete)

module.exports =router
