const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/CategoriesController')

router.get('/', categoriesController.categories )

module.exports = router;