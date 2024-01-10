const express = require("express");
const router = express.Router();
const postController = require("../app/controllers/PostController");
const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
    console.log(file);
  },

  filename: function (req, file, cb) {
    cb(null, file.fieldname + Date.now());
    console.log(file);
  },
});
const upload = multer({ storage: storage });

router.post("/createPost", postController.post);
router.get("/getPost", postController.getPost);
router.get("/getPost/:id", postController.getPostById);
router.get(
  "/getPostByCategories/:categories",
  postController.getPostByCategories
);
router.get("/search", postController.searchPost);
router.put("/updatePost", postController.updatePost);
router.delete("/deletePost/:id", postController.deletePost);

module.exports = router;
