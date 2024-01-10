const Categories = require('../models/Categories');
class CategoryController {

    // [POST] /
    async post(req, res) {
        const { name } = req.body;
        const categoriesDoc = await Category.create({ name });
        res.json(categoriesDoc);
    }
    // [GET] /Category
    async getCategories(req, res) {
      const categories = await Categories.findById(req.params.id);
      if(!categories) {
          res.status(500).json({message: 'The category with the given ID was not found.'})
      } 
      res.status(200).send(categories);
    }
}

module.exports = new CategoriesController;
