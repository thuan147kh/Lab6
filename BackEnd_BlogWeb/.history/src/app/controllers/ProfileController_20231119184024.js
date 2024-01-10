const secret = 'uit20521854'
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
class ProfileController {
    // [GET] /Profile
    profile(req, res) {
        
        // const {token} = req.cookies;
        // jwt.verify(token, secret, {}, (err, info) => {
        //     if(err) throw err;
        //     res.json(info)
        // })
        res.json('ok')
        
    }

}

module.exports = new ProfileController;
