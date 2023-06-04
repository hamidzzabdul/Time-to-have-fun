const express = require('express')
const viewController = require('../controllers/viewController')
const authController = require('../controllers/AuthController')

const router = express.Router()

router.route('/').get(authController.isloggedIn,viewController.getOverview)

module.exports = router