const { check,body } = require('express-validator');
const { Router } = require('express');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');
const {
    eventGet,
    eventPost,
    eventDelete,
    eventUpdate,
} = require('../controllers/event.controller');

const router = Router();

router.get('/', eventGet);

router.post('/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id','course id is not mongoId').isMongoId(),
        body('date','date is required').not().isEmpty(),
        body('description','description is required').not().isEmpty(),
        validateField
    ],
    eventPost
);

router.delete('/:id', eventDelete);
router.put('/:id', eventUpdate);

module.exports = router;
