const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const uploadMiddleware = require('../app/middlewares/uploadMiddleware')
// router.get('/', postController.getPost)
router.post('/', uploadMiddleware.single('file') ,postController.post )

module.exports = router;
