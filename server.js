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

//Models=====================================================
var Events = require("./server/model.js");

//Mongoose========================================================
mongoose.connect('mongodb://admin:ruler123@ds117899.mlab.com:17899/heroku_cv93bc03')

var db = mongoose.connection;

db.on('error', function(err){
	console.log(("Mongoose Error: ", err))
})

db.once("open", function(){
	console.log("Mongoose connection successful.");
});

//DB add and grab============================


//App routes ===========================================================
app.use(express.static(process.cwd() + '/public'));

app.get('/', function(){
	res.sendFile(__dirname + '/public/index.html');
})

app.get("/api", function(req, res){
	console.log('api site');
})

// app.post("/api", function(req, res){
// 	console.log(req.body)

// })
app.post('/api/posts', function (req, res, next) {
  
  var event = new Events({
    title: req.body.title,
    url: req.body.url
  });

  res.send(req.body);
  console.log(req.body);

});
//==========================================================


//Set server to listen
app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);
});