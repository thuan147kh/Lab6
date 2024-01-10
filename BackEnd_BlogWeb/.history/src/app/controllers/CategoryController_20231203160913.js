
class CategoryController {
    getCategories(req, res) {
        res.render('category')
    }
}

module.exports = new CategoryController;
