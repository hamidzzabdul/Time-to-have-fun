const express = require('express')
const authController = require('../controllers/AuthController')

const router = express.Router();

router.delete('/delete/:id', authController.deleteUser)
router.get('/getUsers', authController.getAllUsers)
router.post('/login', authController.login)
router.get('/logout', authController.Logout)

router
    .route('/signup')
    .post(authController.createUser)

module.exports = router