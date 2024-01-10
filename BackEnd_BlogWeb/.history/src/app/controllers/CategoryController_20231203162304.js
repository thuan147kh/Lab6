const Category = require('../models/Category');
class CategoryController {

    getCategory(req, res) {
        res.json('category')
    }
}

module.exports = new CategoryController;
