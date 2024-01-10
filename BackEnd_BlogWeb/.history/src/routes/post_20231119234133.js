const express = require('express')
const router = express.Router()
const multer = require('multer');
const postController = require('../app/controllers/PostController')

// router.get('/', postController.getPost)
router.post('/', postController.post )

module.exports = router;
