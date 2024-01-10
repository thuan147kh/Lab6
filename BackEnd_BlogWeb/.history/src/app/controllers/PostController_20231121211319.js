const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'

      class PostController {
          // [POST] /Post
          post(req, res) {

              const {originalname} = req.files;
              const paths = originalname.split('.');
              const ext = paths[paths.length - 1];
              console.log(ext);
            
          }
          // [GET] /Post
          getPost(req, res) {
              
          }
}

module.exports = new PostController;
   