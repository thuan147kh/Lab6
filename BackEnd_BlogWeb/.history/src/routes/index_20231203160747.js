const {register} = require('../app/controllers/RegisterController')
const {login} = require('../app/controllers/LoginController')
const {post} = require('../app/controllers/PostController')
const {logout} = require('../app/controllers/LogoutController')
const {profile} = require('../app/controllers/ProfileController')
const {category} = require('../app/controllers/CategoryController')

const registerRouter = require('./register')
const loginRouter = require('./login')
const profileRouter = require('./profile')
const logoutRouter = require('./logout')
const postRouter = require('./post')
const categoryRouter = require('./category')
function route(app) {

    app.use('/register', registerRouter)
    app.use('/login', loginRouter)
    app.use('/profile', profileRouter)
    app.use('/logout', logoutRouter)
    app.use('/post', postRouter)
    app.use('/getPost', postRouter)
    app.use('/category', categoryRouter)
    
}

module.exports = route;