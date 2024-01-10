const express = require('express')
const router = express.Router()
const uploadMiddleware = require('../app/middlewares/uploadMiddleware')
const postController = require('../app/controllers/PostController')

// router.get('/', postController.getPost)
router.post('/', uploadMiddleware.single('file') ,postController.post )

module.exports = router;
