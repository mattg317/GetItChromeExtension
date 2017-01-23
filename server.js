require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
var request = require('request');
mongoose.Promise = Promise;


//Express app
var app = express();
var PORT = process.env.PORT || 3000;

//Morgan======================================================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Models=====================================================
var Events = require("./server/model.js");
var Sports = require("./server/sports.js");
var Concert = require("./server/concerts.js");

//Mongoose========================================================
mongoose.connect(process.env.DB_HOST);

var db = mongoose.connection;

db.on('error', function(err){
	console.log(("Mongoose Error: ", err))
})

db.once("open", function(){
	console.log("Mongoose connection successful.");
});


//App routes ===========================================================
app.use(express.static(process.cwd() + '/public'));

app.get('/', function(){
	res.sendFile(__dirname + '/public/index.html');
})

app.get("/api/events", function(req, res){
	console.log('visited events');
	
	Events.find({}, function(error, doc){
		if(error){
			res.send(error);
		}else{
			res.send(doc);
		}
	})
});

app.get("/api/concerts", function(req, res){
	console.log("Visited Concerts")

	Concert.find({}, function(error, doc){
		if(error){
			res.send(error);
		}else{
			res.send(doc)
		}
	})
});

app.get("/api/sports", function(req, res){
	console.log("Sports page hit");

	Sports.find({}, function(error, doc){
		if(error){
			res.send(error);
		}else{
			res.send(doc)
		}
	})
})


app.post('/api/posts', function (req, res, next) {
  
});


//==========================================================


//Set server to listen
app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);
});