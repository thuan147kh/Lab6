


class LogoutController {
    // [POST] /Logout
    logout(req, res) {
      res.cookie('token', '').json('Ok')
    }
}

module.exports = new LogoutController;
