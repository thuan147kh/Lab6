const fs = require('fs');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'public/uploads/' });
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'

 class PostController {
    // [POST] /Post
    async post(req, res) {
        res.json('Ok')
    }
    // [GET] /Post
    async getPost(req, res) {
        
    }
}
module.exports = new PostController;
  