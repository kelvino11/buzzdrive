const mongoose = require("mongoose");

var sign_up = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    mobile_number: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }

})

var user_signup = mongoose.model("user_signup",sign_up);

module.exports = user_signup;