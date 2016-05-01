
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
    person1 = {
      name: "name001",
      email: "email001",
      number: "111-111-1111"  
    };
    person2 = {
      name: "name002",
      email: "email002",
      number: "222-222-2222"  
    };
    person3 = {
      name: "name003",
      email: "email003",
      number: "333-333-3333"  
    };
    
    var contactlist = [person1, person2, person3];
    res.json(contactlist);
});

app.listen(3000);
console.log("server running on port 3000");

