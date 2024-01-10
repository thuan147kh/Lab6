
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class CategoriesController {
    
    categories(req, res, next) {
        res.render('categories');
    }
}
module.exports = new CategoriesController;
