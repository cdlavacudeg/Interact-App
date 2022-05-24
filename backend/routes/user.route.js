const { Router } = require('express');
const { usersGet, userPost } = require('../controllers/user.controller');


const router = Router();


router.get('/', usersGet)

router.post('/', userPost)

module.exports = router;
