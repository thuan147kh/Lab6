const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const multer = require('multer'); 
const uploadMiddleware = multer({ dest: 'uploads/' });
 class PostController {
    // [POST] /Post
    post(req, res) {
        res.json(req.files)
    }
    // [GET] /Post
    getPost(req, res) {
        
    }
}

module.exports = new PostController;
   