const { Router } = require('express')
const { login } = require('../controllers/auth.controller')



const router = Router()


router.get('/login', login)
