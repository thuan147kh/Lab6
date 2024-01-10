const { token } = require("morgan");
const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

class RegisterController {
  // [POST] /register
  async register(req, res) {
    try {
      const existingUser = await User.findOne({ name: req.body.username });
      if (existingUser) {
        return res.status(400).send("User already exists");
      } else {
        const token = jwt.sign(
          { name: req.body.username },
          "levansy20521854daihoccongnghethongtin"
        );
        const data = {
          name: req.body.username,
          password: req.body.password,
          token: token,
        };
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
