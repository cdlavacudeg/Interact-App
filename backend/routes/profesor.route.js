
const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => res.send("Lista de profesores extraida desde Mongo"));

module.exports = router;
