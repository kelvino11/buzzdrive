const mongoose = require("mongoose");

var signup = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    admin_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

var admin_signup = mongoose.model("admin_signup",signup)

module.exports = admin_signup;