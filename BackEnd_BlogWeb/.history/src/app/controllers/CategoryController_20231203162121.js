const Category = require('../models/Category');
class CategoryController {

    getCategory(req, res) {
        res.render('category')
    }
}

module.exports = new CategoryController;
