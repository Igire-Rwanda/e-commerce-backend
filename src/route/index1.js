const express = require("express");
const passwordReset = require("./passwordReset");
const users = require("./serRoute");



const router = express.Router();

router.use("/api/users",users);
router.use("/api/password-reset",passwordReset);


module.exports = router;
