
var express = require("express");
var app = express();


// test to send Hello World to all req
// app.get('/', function(req, res){
// 	res.send("hello world");
// });

// use static pages from location
app.use(express.static(__dirname + "/public"));


app.listen(3000);
console.log("server running on port 3000");

