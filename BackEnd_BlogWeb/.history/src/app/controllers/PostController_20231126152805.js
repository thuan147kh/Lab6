const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const path = require('path');


const uploadSingleFile = async (fileObject) => {
  const { file } = fileObject;
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  let extName = path.extname(file.name);
  let baseName = path.basename(file.name, extName);
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;


  try {
    await file.mv(finalPath);
    return {
      status: "success",
      path: finalName,
      error: null,
    };
  } catch (err) {
    console.log(">>> check error: ", err);
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(err),
    };
  }
};
  class PostController {
    // [POST] /Post
      async post(req, res) {
        await uploadSingleFile(req.files);
            
        const { file: { name } } = req.files;;
        const parts = name.split('.')
        const ext = parts[parts.length - 1] 

        const {token} = req.cookies
        jwt.verify(req.cookies.token, secret, async (err, info) => {
          if (err) throw err;
          const { title, content, categories } = req.body;
          const postDoc = await Post.create({
          title,
          content,
          categories,
          cover: name,
          author: info._id
          })
          res.json(postDoc)
        })
      }
      // [GET] /Post
      async getPost(req, res) {
        
        res.json(await Post.find()
          .populate('author', ['username'])
          .sort({createdAt: -1})
          .limit(10)
        )  
      }
      // [GET] /Post/:id
      async getPostById(req, res) {
        const { id } = req.params;
        console.log(id)
        // const postDoc =  Post.findById(id)
        // res.json(postDoc)
          // .then((post) => {
          //   res.json(postDoc);
          // })
          // .catch((err) => {
          //   res.status(500).json(err);
          // });
      }
}

module.exports = new PostController; 
   