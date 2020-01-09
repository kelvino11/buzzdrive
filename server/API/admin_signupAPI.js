const express = require("express");
const bcrypt = require("bcrypt")
const mongoose = require("mongoose")
require("../../index")
var admin = require("../Schema/admin_signup")
require("../DB_connection/db_connection")

var admin_signup = (req,res,next) => {
    var admin_name = req.body.admin_name;
    admin.find({$or: [
        {admin_name: req.body.admin_name},{email: req.body.email}
    ]})
    .exec()
    .then(admins => {
        if(admins.length >= 1){
            res.json({
                res: "admin user name or email already exist, try again"
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
                     new admin({
                        _id: new mongoose.Types.ObjectId,
                        admin_name: admin_name,
                        password: hash,
                        email: req.body.email
                    })
                    .save()
                    .then(result => {
                        res.status(200).json({
                            res: "admin account created successfuly",
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
    admin_signup: admin_signup
}