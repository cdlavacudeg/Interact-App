
const { Router } = require('express');
const {classificationGet, classificationPost} = require('../controllers/classifications.controller.js')
const router = Router();

router.get('/', classificationGet )
router.post('/', classificationPost)

module.exports = router;
