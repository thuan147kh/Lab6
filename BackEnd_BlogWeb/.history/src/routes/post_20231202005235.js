const express = require('express')
const router = express.Router()
const postController = require('../app/controllers/PostController')
const multer = require('multer')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
      console.log(file)
    },
    
    filename: function (req, file, cb) {
      cb(null, file.fieldname + Date.now())
      console.log(file)
    }
  })
const upload = multer({ storage: storage })

router.post('/' ,postController.post )
router.get('/' ,postController.getPost)
router.get('/:id', postController.getPostById)
router.put('/update/:id', postController.updatePost)
router.delete('/deletePost/:id', postController.deletePost)
// router.get('/', postController.getImage)
module.exports = router;




