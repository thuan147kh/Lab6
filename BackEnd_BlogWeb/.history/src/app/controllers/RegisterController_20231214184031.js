const { token } = require("morgan");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 12;
class RegisterController {
  // [POST] /register
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const existingUser = await User.findOne({ username });

      if (existingUser) {
        return res.status(400).send("User already exists");
      } else {
        const salt = bcrypt.genSaltSync(saltRounds);
        const hashedPassword = bcrypt.hashSync(password, salt);
        // const token = jwt.sign(
        //   { username: req.body.username },
        //   "levansy20521854daihoccongnghethongtin"
        // );
        const data = await User.create({
          username,
          password: hashedPassword,
          token: token,
        });
        res.status(201).send("User registered successfully");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new RegisterController();
