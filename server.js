var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");


//Express app
var app = express();
var PORT = process.env.PORT || 3000;

//Morgan
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//add mongoose

//using public folder
app.use(express.static('./public'));

app.get('/', function(){
	res.sendFile(__dirname + '/public/index.html');
})

app.post("/api", function(req, res){
	console.log(req.body)
})


//Set server to listen
app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);
})