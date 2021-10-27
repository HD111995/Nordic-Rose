const express = require('express')
const router = express.Router()
const newController = require('../controllers/newArtControllers')


router.get('/',newController.find_art)


router.post('/',newController.add_new);

module.exports = router