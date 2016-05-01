
var express = require("express");
var app = express();


// test to send Hello World to all req
// app.get('/', function(req, res){
// 	res.send("hello world");
// });

// use static pages from location
app.use(express.static(__dirname + "/public"));
app.get("/contactlist", function(req, res){
    console.log("rcved get request");
      
    var contactlist = require("./data/contacts.json");
    res.json(contactlist);
});

app.listen(3000);
console.log("server running on port 3000");

