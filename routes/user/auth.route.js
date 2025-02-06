const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user/auth.controller");
const { validateLogin } = require("../../middleware/authValidator");

router.post("/signup", controller.signup);
router.post("/login", validateLogin, controller.login);

module.exports = router;
