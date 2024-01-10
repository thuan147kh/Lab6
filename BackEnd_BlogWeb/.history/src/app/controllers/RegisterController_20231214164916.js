const { token } = require("morgan");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const UserModel = require("../models/User");

class RegisterController {
  // [POST] /register
  async register(req, res) {
    try {
      const check = await User.findOne({ name: req.body.name });
      if (check) {
        alert("User already exist");
      } else {
        const token = jwt.sign(
          { name: req.body.name },
          "levansy20521854daihoccongnghethongtin"
        );
        const data = {
          name: req.body.name,
          password: req.body.password,
          token: token,
        };
        await User.create([data]);
      }
    } catch {
      res.send("Nothing!");
    }
  }
}

module.exports = new RegisterController();
