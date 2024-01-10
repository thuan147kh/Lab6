import { findOne } from "../models/User";
import { compareSync } from "bcryptjs";
const secret = "uit20521854";
import cookieParser from "cookie-parser";
import { sign } from "jsonwebtoken";
class LoginController {
  // [POST] /login
  async login(req, res) {
    const { username, password } = req.body;
    const userDoc = await findOne({ username });
    const passOk = compareSync(password, userDoc.password);
    if (passOk) {
      //loggin in
      sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).json({
          id: userDoc._id,
          username,
        });
      });
    } else {
      res.status(400).json({ message: "Wrong password" });
    }
  }
}

export default new LoginController();
