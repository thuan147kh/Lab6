const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const multer = require('multer')
const path = require('path')
;// router.get('/', postController.getPost)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + path.extname(file.originalname)) 
    }
  })
const uploadMiddleware = multer({ storage: storage })

router.post('/', uploadMiddleware.single('file') ,postController.post )

module.exports = router;




