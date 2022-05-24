
const { Router } = require('express');
const profesorCtrl = require('../controllers/profesores.crontoller.js')
const router = Router();

router.get('/', profesorCtrl.getProfesores)
router.post('/',profesorCtrl.createProfesor)

module.exports = router;
