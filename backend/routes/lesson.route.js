const {Router}=require('express')
const {check,body} = require('express-validator')
const Lesson = require('../models/lesson.model.js')
const {validateField}= require('../middlewares')

const {lessonsGet,lessonPost,lessonUpdate,lessonDelete}=require('../controllers/lesson.controller.js')
const {existModelById} =require('../helpers/db-validator.js')

const router = Router()

router.get('/',lessonsGet)

router.post('/',[
    check('course_id','course id is required').not().isEmpty(),
    check('course_id','course id is not mongoId').isMongoId(),
    body('lectures','lectures is not an array').if(body('lectures').exists()).isArray(),
    body('lectures.*','lecture in array is not an Object').if(body('lectures').exists()).isObject(),
    body('lectures.*').if(body('lectures').exists()).custom(lecture=>{
        const title = lecture.hasOwnProperty('title')
        const link = lecture.hasOwnProperty('link')
        if(!title){
            throw new Error('Title required')
        }else if (!link){
            throw new Error('Link required')
        }
        return true;
    }),
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
