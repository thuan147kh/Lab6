const Category = require('../models/Category');
class CategoryController {
  
    getCategories(req, res) {
        res.render('category')
    }
}

module.exports = new CategoryController;
