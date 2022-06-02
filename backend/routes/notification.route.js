const { Router } = require('express');
const { check } = require('express-validator');
const { existModelById } = require('../helpers/db-validator.js');
const Notification = require('../models/notification.model');
const {
    notificationGet,
    notificationPost,
    notificationPut,
    notificationDelete,
} = require('../controllers/notification.controller');

const { validateField, validateJWT, isAdminRole } = require('../middlewares');

const router = Router();

router.get('/', notificationGet);

router.post(
    '/',
    [
        validateJWT,
        isAdminRole,
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
        check('date', 'date is required').not().isEmpty(),
        check('date', 'date must be in format DD/MM/YYYY').isDate({
            format: 'DD/MM/YYYY',
        }),
        validateField,
    ],
    notificationPost
);

router.put(
    '/:id',
    [
        check('id', 'id is not mongoId').isMongoId(),
        check('title', 'Title is required').not().isEmpty(),
        check('content', 'Content is required').not().isEmpty(),
        check('date', 'date is required').not().isEmpty(),
        check('date', 'date must be in format DD/MM/YYYY').isDate({
            format: 'DD/MM/YYYY',
        }),
        validateField,
    ],
    notificationPut
);

router.delete(
    '/:id',
    [
        validateJWT,
        isAdminRole,
        check('id', 'id is not mongoId').isMongoId(),
        check('id').custom((id) => existModelById(Notification, id)),
        validateField,
    ],
    notificationDelete
);

module.exports = router;
