const { check } = require('express-validator')
const { Router } = require('express');
const { validateField, isTeacherRole, validateJWT } = require('../middlewares');
const { eventGet, eventPost, eventDelete, eventUpdate} = require('../controllers/event.controller');

const router = Router();

router.get('/', eventGet);
router.post('/', eventPost)
router.delete('/:id', eventDelete)
router.put('/:id',  eventUpdate)


module.exports = router;
