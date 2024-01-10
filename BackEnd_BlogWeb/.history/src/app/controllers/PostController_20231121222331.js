const fs = require('fs');
const Post = require('../models/Post');
const jwt = require('jsonwebtoken');
const secret = 'uit20521854'
const path = require('path');

const uploadSingleFile = async (fileObject) => {
  // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
  const { file } = fileObject;

  // save => public/images/upload
  //remember to create the upload folder first
  let uploadPath = path.resolve(__dirname, "../public/images/upload");
  
  // abc.png => abc-timestamp.png

  //get image extension
  let extName = path.extname(file.name);
  console.log("ext name: ", extName)
  //get image's name (without extension)
  let baseName = path.basename(file.name, extName);

  //create final path: eg: /upload/your-image.png
  let finalName = `${baseName}-${Date.now()}${extName}`;
  let finalPath = `${uploadPath}/${finalName}`;

  console.log("final path: ", finalPath)

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
            
            
          }
}

module.exports = new PostController; 
   