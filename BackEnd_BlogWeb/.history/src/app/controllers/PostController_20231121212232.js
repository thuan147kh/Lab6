const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'

      class PostController {
          // [POST] /Post
          post(req, res) {
            console.log(req.files)
            res.json({files:req.file})
          }
          
}

module.exports = new PostController; 
   