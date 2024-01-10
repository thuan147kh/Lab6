
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
const jwt = require('jsonwebtoken');

class LoginController {
    // [POST] /login
    async login(req, res) {
      const { username, password } = req.body;
      const userDoc = await User.findOne({ username });
      const passOk = bcrypt.compareSync(password, userDoc.password);
      if(passOk){
        //loggin in
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json({
              id:userDoc._id,
              username
            })
        })
      }else{
        res.status(400).json({message: 'Wrong password'})
      }
    }
}

module.exports = new LoginController;
