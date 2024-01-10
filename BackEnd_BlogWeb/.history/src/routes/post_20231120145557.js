const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const multer = require('multer')
const storage = multer.diskStorage({
    destination:(req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename:(req, file, cb) => {
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
const uploadMiddleware = multer({ storage: storage });
// router.get('/', postController.getPost)
router.post('/', uploadMiddleware.single('file') ,postController.post )

module.exports = router;
