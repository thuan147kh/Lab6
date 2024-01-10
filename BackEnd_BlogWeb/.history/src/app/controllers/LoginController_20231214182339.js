const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  // [POST] /login
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      const passOk = bcrypt.compareSync(password, existingUser.password);
      const token = jwt.sign(
        { username: req.body.username },
        "levansy20521854daihoccongnghethongtin"
      );
      if (passOk) {
        jwt.sign(
          { username, id: existingUser._id },
          "levansy20521854daihoccongnghethongtin",
          {},
          (err, token) => {
            if (err) throw err;
            res.cookie("token", token).json({
              id: existingUser._id,
              username,
            });
          }
        );
      } else {
        res.status(400).json({ message: "Wrong password or username" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new LoginController();
