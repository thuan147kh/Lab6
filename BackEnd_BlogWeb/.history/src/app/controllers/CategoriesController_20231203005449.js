
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

class CategoriesController {
    // [GET] /categories
    async getCategories(req, res) {
        const categoryList = await Categories.find()
        if(!categoryList) {
          res.status(500).json({success: false})
        } 
        res.status(200).send(categoryList);

    }
}
module.exports = new CategoriesController;
