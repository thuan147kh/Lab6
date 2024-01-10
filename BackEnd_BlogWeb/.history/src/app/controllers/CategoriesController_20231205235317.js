
class CategoriesController {
    // [POST] /:categories
    async getOne(req, res) {
      const {categories} = req.params;
      const posts = await Post.find({ categories });
      res.json(posts);
    }
}

module.exports = new CategoriesController;
