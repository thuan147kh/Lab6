const { register } = require("../app/controllers/RegisterController");
const { login } = require("../app/controllers/LoginController");
const { post } = require("../app/controllers/PostController");
const { logout } = require("../app/controllers/LogoutController");
const { catrgories } = require("../app/controllers/CategoriesController");
const registerRouter = require("./register");
const loginRouter = require("./login");
const profileRouter = require("./profile");
const logoutRouter = require("./logout");
const postRouter = require("./post");
const categoriesRouter = require("./categories");

function route(app) {
  app.use("/register", registerRouter);
  app.use("/login", loginRouter);
  app.use("/logout", logoutRouter);
  app.use("/post", postRouter);
  app.use("/getPost", postRouter);
}

module.exports = route;
