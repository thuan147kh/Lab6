const express = require('express')
const router = express.Router()
const categoryController = require('../app/controllers/CategoryController')

router.get('/getAll', categoryController.getCategory)

module.exports = router;