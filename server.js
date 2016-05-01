
var express = require("express");
var app = express();

var mongojs = require("mongojs");
var db = mongojs("contactlist", ["contactlist"]);

// test to send Hello World to all req
// app.get('/', function(req, res){
// 	res.send("hello world");
// });

// use static pages from location
app.use(express.static(__dirname + "/public"));
app.get("/contactlist", function(req, res){
    console.log("received a GET request.");
    
    db.contactlist.find(function(err, docs){
        console.log(docs);
        res.json(docs);
    });
   
});


app.post("/contactlist", function(req,res){
    console.log(req.body);
});

app.listen(3000);
console.log("server running on port 3000");

