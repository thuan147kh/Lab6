const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class LoginController {
  // [POST] /login
  async login(req, res) {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if (existingUser && passOk) {
        res.json("Welcome to Blog Website" + username);
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
