const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/CategoryController')

router.get('/getAll', categoriesController.getCategories)

module.exports = router;