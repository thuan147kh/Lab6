const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const path = require('path');

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file

  // save => public/images/upload
  //remember to create the upload folder first
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  // console.log(">>> check fileObject: ", path.resolve(__dirname, "../public/images/upload"))

  // abc.png => abc-timestamp.png

  //get image extension
  let extName = path.extname(fileObject.name);

  //get image's name (without extension)
  let baseName = path.basename(fileObject.name, extName);

  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  console.log("final path: ", finalPath)

  try {
    await fileObject.mv(finalPath);
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
          post(req, res) {
            
            console.log(req.files)
            
          }
          
}

module.exports = new PostController; 
   