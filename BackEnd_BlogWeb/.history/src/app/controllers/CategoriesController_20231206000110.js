const Post = require('../models/Post');
class CategoriesController {
    // [POST] /:categories
    async getOne(req, res) {
      const {categories} = req.params;
      const posts = await Post.find({ categories });
      res.json(posts);
    }
    async getCategories(req, res) {
        try {
          const lastPost = await Post.findOne().sort({createdAt: -1});
          const lastCategories = lastPost.categories;
          res.json(lastCategories);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      }
}

module.exports = new CategoriesController;
