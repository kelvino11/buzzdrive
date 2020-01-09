const express = require("express")
const router = express.Router();
require("../../index")
var admin_signup = require("../API/admin_signupAPI")

router.post("/signup",admin_signup.admin_signup)

module.exports = router;