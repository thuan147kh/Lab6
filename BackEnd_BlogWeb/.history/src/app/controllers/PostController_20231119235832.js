const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'upload/' });
 class PostController {
    // [POST] /Post
    post(req, res) {
        
    }
    // [GET] /Post
    async getPost(req, res) {
        
    }
}

module.exports = new PostController;
   