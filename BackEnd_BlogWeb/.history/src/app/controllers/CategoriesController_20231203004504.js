
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class CategoriesController {
    // [GET] /categories
    getCategories(req, res) {
        res.json('categories');
    }
}
module.exports = new CategoriesController;
