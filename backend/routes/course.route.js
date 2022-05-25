const { Router } = require('express');
const { coursesGet, coursePost } = require('../controllers/course.controller');


const router = Router();


router.get('/', coursesGet)

router.post('/', coursePost)

module.exports = router;
