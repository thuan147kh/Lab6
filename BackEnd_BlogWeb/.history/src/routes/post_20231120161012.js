const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const multer = require('multer')
const uploadMiddleware = multer({ dest: 'uploads/' })
// router.get('/', postController.getPost)

router.post('/', uploadMiddleware.single('file') ,postController.post )

module.exports = router;
