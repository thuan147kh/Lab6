
class CategoriesController {
    // [POST] /Logout
    async getOne(req, res) {
      const {categories} = req.params;
      const posts = await Post.find({ categories });
      res.json(posts);
    }
}

module.exports = new CategoriesController;
