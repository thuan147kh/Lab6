const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const jwtSecret = process.env.JWT_SECRET || "default_secret";

class LoginController {
  // [POST] /login
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const userDoc = await User.findOne({ username });

      if (!userDoc) {
        return res.status(400).json({ message: "User not found" });
      }

      const passOk = bcrypt.compareSync(password, userDoc.password);

      if (passOk) {
        const accessToken = jwt.sign(
          {
            username,
            id: userDoc._id,
          },
          jwtSecret
        );
        console.log(accessToken);
        res
          .cookie("token", accessToken, { secure: true, httpOnly: true })
          .json({
            id: userDoc._id,
            username,
          });
      } else {
        res.status(400).json({ message: "Wrong password" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
}

module.exports = new LoginController();
