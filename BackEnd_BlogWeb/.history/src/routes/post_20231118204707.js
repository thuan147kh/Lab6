const express = require('express')
const router = express.Router()
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'public/uploads/' });
const postController = require('../app/controllers/PostController')

router.post('/', uploadMiddleware.single('file'), postController.post )
// router.get('/getPost', postController.getPost)
module.exports = router;