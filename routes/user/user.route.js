const express = require("express");
const router = express.Router();
const controller = require("../../controllers/user/userlist.controller");

router.get("/users", controller.getUsersList);

module.exports = router;
