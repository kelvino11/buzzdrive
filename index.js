var express = require("express");
var bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
const mongoose = require("mongoose");
var app= express();

app.use(cors())
app.use(bodyparser.json());
app.use(express.static("client"));
app.use(bodyparser.urlencoded({extended:true}));

var port = process.env.PORT || 8000 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/main.html"))
})
app.listen(port,() => {
    console.log(`listening to port ${port}`)
});

module.exports = app;