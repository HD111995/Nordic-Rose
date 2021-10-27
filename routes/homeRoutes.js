const express = require('express')
const router = express.Router()
const find_art = require('../controllers/homeControllers')


router.get('/',find_art)


module.exports = router