const express = require('express')
const router = express.Router()
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const postController = require('../app/controllers/PostController')

// router.get('/', postController.getPost)
router.post('/', uploadMiddleware.single('files'),postController.post )

module.exports = router;
