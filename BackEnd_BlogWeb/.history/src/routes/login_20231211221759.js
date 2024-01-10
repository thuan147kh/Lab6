const express = require("express");
const router = express.Router();
const loginController = require("../app/controllers/LoginController").default;

router.post("/", loginController.login);

module.exports = router;
