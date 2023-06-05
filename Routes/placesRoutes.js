const express = require('express')

const placesController = require('../controllers/placesController')

const router = express.Router()

router.route('/').get(placesController.getPlace)
router.route('/createPlace').post(placesController.creatPlace)

module.exports = router