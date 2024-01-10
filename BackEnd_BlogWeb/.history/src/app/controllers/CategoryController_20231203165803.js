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
      const category = await Category.findById(req.params.id);
      if(!category) {
          res.status(500).json({message: 'The category with the given ID was not found.'})
      } 
      res.status(200).send(category);
    }
}

module.exports = new CategoryController;
