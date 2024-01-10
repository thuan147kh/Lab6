const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const multer = require('multer');
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
      class PostController {
          // [POST] /Post
          post(req, res) {

            console.log(req.files)
            
          }
          // [GET] /Post
          getPost(req, res) {
              
          }
}

module.exports = new PostController;
   