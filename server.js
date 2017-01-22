require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
var Yelp = require('yelp')
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

//Mongoose========================================================
mongoose.connect(process.env.DB_HOST);

var db = mongoose.connection;

db.on('error', function(err){
	console.log(("Mongoose Error: ", err))
})

db.once("open", function(){
	console.log("Mongoose connection successful.");
});


//yelp db add=============================
var yelp = new Yelp({
	consumer_key: process.env.CONSUMER_KEY,
  consumer_secret:process.env.CONSUMER_SECRET,
  token: process.env.TOKEN,
  token_secret: process.env.TOKEN_SECRET,
});

yelp.search({ term: 'Sports Bars', location: 'Hoboken' })
.then(function (data) {

	//var n = data.businesses.length
	for(var i =0; i<5; i++){
		console.log("name",data.businesses[i].name);
		console.log('url', data.businesses[i].url);
		console.log('\n');
		// var event = new Events({
		// 	title: data.businesses[i].name,
		// 	url: data.businesses[i].url
		// })

		// event.save(function(err, doc){
		// 	if(err){
		// 		console.log(err)
		// 	}else{
		// 		console.log(doc)
		// 	}
		// })

	}
  
})
.catch(function (err) {
  console.error(err);
});



//App routes ===========================================================
app.use(express.static(process.cwd() + '/public'));

app.get('/', function(){
	res.sendFile(__dirname + '/public/index.html');
})

app.get("/api", function(req, res){
	console.log('api site');
	
	Events.find({}, function(error, doc){
		if(error){
			res.send(error);
		}else{
			res.send(doc);
		}
	})
})

// app.post("/api", function(req, res){
// 	console.log(req.body)

// })
app.post('/api/posts', function (req, res, next) {
  
  // var event = new Events({
  //   title: req.body.title,
  //   url: req.body.url
  // });

  // res.send(req.body);
  // console.log(req.body);

  // event.save(function(err,post){
  // 	if (err){return next(err)}
  // 		res.json(201, post)
  // })

});


//==========================================================


//Set server to listen
app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);
});