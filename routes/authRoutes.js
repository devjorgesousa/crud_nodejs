const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')

router.get('/', AuthController.Login)
router.post('/', AuthController.LoginPost)
router.get('/cadastrar', AuthController.Cadastrar)
router.post('/cadastrar', AuthController.CadastrarPost)
router.get('/logout', AuthController.Logout)

module.exports = router
