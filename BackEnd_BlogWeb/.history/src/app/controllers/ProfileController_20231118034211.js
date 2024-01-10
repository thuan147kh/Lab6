const secret = 'asdfadfdaff'
const jwt = require('jsonwebtoken');

class ProfileController {
    // [GET] /Profile
    profile(req, res) {
        const {token} = req.cookies;
        jwt.verify(token, secret, {}, (err, info) => {
            if(err) throw err;
            res.json(info)
        })
    }

}

module.exports = new ProfileController;
