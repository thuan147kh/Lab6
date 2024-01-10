const secret = "uit20521854";
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
class ProfileController {
  // [GET] /Profile
  profile(req, res) {
    const { token } = req.cookies;

    jwt.verify(token, secret, {}, (err, info) => {
      if (err) {
        console.error("Xác thực JWT thất bại:", err.message);
        return res.status(401).json({ error: "Unauthorized" });
      }

      res.json(info);
    });
  }
}

module.exports = new ProfileController();
