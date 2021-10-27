const express = require('express')
const router = express.Router()
const find_byId = require('../controllers/detailsControllers')

router.get('/:id',find_byId)

module.exports = router