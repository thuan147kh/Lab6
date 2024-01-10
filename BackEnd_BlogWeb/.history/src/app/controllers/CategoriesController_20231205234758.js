
class CategoriesController {
    // [POST] /Logout
    logout(req, res) {
      res.json({message: 'Logout'})
    }
}

module.exports = new CategoriesController;
