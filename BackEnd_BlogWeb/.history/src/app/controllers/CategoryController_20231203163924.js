const Category = require('../models/Category');
class CategoryController {

    async getCategory(req, res) {
      const category = await Category.findById(req.params.id);
      if(!category) {
          res.status(500).json({message: 'The category with the given ID was not found.'})
      } 
      res.status(200).send(category);
    }
}

module.exports = new CategoryController;
