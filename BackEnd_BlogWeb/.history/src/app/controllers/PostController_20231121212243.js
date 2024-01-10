const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'

      class PostController {
          // [POST] /Post
          post(req, res) {
         
            res.json({files:req.files})
          }
          
}

module.exports = new PostController; 
   