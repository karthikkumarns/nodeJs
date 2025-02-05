const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user/auth.controller");

router.post("/signup", controller.signup);

module.exports = router;
