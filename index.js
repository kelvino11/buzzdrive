var express = require("express");
var bodyparser = require("body-parser");
const path = require("path");
const cors = require("cors");
var db = require("./server/DB_connection/db_connection")
var app= express();

app.use(cors())
app.use(bodyparser.json());
app.use(express.static("client"));
app.use(bodyparser.urlencoded({extended:true}));

//getting all router
var admin_signupRouter = require("./server/Router/admin_signupRouter")
var users_signupRouter = require("./server/Router/user_signupRouter")

// using the router instance
app.use("/admin",admin_signupRouter)
app.use("/users",users_signupRouter)

var port = process.env.PORT || 8000 

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + "/client/main.html"))
})
app.listen(port,() => {
    console.log(`listening to port ${port}`)
});

module.exports = app;