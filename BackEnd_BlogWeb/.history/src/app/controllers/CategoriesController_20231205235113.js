
class CategoriesController {
    // [POST] /Logout
    getOne(req, res) {
      res.json({message: 'Logout'})
    }
}

module.exports = new CategoriesController;
