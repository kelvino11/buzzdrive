const express = require("express");
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
require("../../index")
var user = require("../Schema/user_signup")
require("../DB_connection/db_connection")

var user_signup = (req,res,next) => {
    var user_name = req.body.user_name;
    user.find({$or: [
        {user_name: req.body.user_name},{email: req.body.email}
    ]})
    .exec()
    .then(users => {
        if(users.length >= 1){
            res.json({
                res: "user name or email already exist, try again"
            })
        }
        else{
            bcrypt.hash(req.body.password, 10, (err,hash) =>{
                if(err){
                    res.status(500).json({
                        error: "could not hash password"
                    })
                }
                else{
                     new user({
                        _id: new mongoose.Types.ObjectId,
                        user_name: user_name,
                        password: hash,
                        email: req.body.email,
                        mobile_number: req.body.mobile_number
                    })
                    .save()
                    .then(result => {
                        res.status(201).json({
                            res: "user account created successfuly",
                            result: result
                        })
                    })
                    .catch(err =>{
                        res.status(500).json({
                            error: "account has not been created, an error has occured"
                        })
                    })
                }
            })
        }
    }) 
}

module.exports = {
    user_signup: user_signup
}