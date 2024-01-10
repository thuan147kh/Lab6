const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'

      class PostController {
          // [POST] /Post
          post(req, res) {

            res.json(req.file)
            
          }
          // [GET] /Post
          getPost(req, res) {
              
          }
}

module.exports = new PostController;
   