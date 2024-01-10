const User = require("../models/User");
const bcrypt = require("bcryptjs");
const saltRounds = 12;

class RegisterController {
  // [POST] /register
  async register(req, res) {
    const { username, password } = req.body;
    try {
      const salt = bcrypt.genSaltSync(saltRounds);
      const hashedPassword = bcrypt.hashSync(password, salt);

      const userDoc = await User.create({
        username,
        password: hashedPassword,
      });

      res.json({ id: userDoc._id, username: userDoc.username });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Registration failed" });
    }
  }
}

module.exports = new RegisterController();
