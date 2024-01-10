const { token } = require("morgan");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const saltRounds = 12;
class RegisterController {
  // [POST] /register
  async register(req, res) {
    try {
      const existingUser = await User.findOne({ username: req.body.username });
      console.log(existingUser);
      function hassPass(password) {
        const res = bcrypt.hash(password, 10);
        return res;
      }
      function compare(userPass, hassPass) {
        const res = bcrypt.compare(userPass, hassPass);
        return res;
      }
      if (existingUser) {
        return res.status(400).send("User already exists");
      } else {
        const token = jwt.sign(
          { username: req.body.username },
          "levansy20521854daihoccongnghethongtin"
        );
        const data = {
          username: req.body.username,
          password: req.body.password,
          token: token,
        };
        console.log(data);
        await User.insertMany([data]);
        res.status(201).send("User registered successfully");
      }
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    }
  }
}

module.exports = new RegisterController();
