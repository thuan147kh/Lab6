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
            console.log(req.files)
  

            const { file: { name } } = req.files;
            console.log(name);

            // const path = name.split('.')
            // const ext = path[path.length - 1]
            // res.json(ext)
            
          }
}

module.exports = new PostController; 
   