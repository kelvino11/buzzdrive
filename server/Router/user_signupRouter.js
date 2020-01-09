const express = require("express")
const router = express.Router();
require("../../index")
var user_signup = require("../API/user_signupAPI")

router.post("/signup",user_signup.user_signup)

module.exports = router;