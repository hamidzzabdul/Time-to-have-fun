const express = require('express')

const placesController = require('../controllers/placesController')

const router = express.Router()

router.route('/').get(placesController.getPlace)

module.exports = router