const express = require('express')
const controller = require('../controllers/user.controller')
const dto = require('../dtos/auth.dto')
const validate = require('../middlewares/validate.middleware')

const router = express.Router()

router.post('/register', validate(dto.auth), controller.signup)
router.post('/login', validate(dto.auth), controller.login)

module.exports = router
