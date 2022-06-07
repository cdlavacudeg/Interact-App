const { check,body } = require('express-validator');
const { Router } = require('express');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');
const {Course} = require('../models/')
const {existModelById} = require('../helpers/db-validator.js')
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
        check('course_id').custom((id) => existModelById(Course, id)),
        body('date','date is required').not().isEmpty(),
        body('date', 'date must be in format DD/MM/YYYY').isDate({ format: 'DD/MM/YYYY' }),
        body('description','description is required').not().isEmpty(),
        validateField
    ],
    eventPost
);

router.delete('/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'course_id is not mongoId').isMongoId(),
        check('course_id').custom((id) => existModelById(Course, id)),
        body('index', 'index is required').not().isEmpty(),
        validateField,
    ],
    eventDelete
);
router.put('/:course_id',
    [
        validateJWT,
        isTeacherRole,
        check('course_id', 'course_id is not mongoId').isMongoId(),
        check('course_id').custom((id) => existModelById(Course, id)),
        body('date', 'date must be in format DD/MM/YYYY')
            .if(body('date').exists())
            .isDate({ format: 'DD/MM/YYYY' }),
        body('index', 'index is required').not().isEmpty(),
        validateField,
    ],
    eventUpdate
);

module.exports = router;
