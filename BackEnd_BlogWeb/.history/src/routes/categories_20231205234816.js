const express = require('express')
const router = express.Router()
const categoriesController = require('../app/controllers/CategoriesController')

router.get('/', categoriesController.logout )

module.exports = router;