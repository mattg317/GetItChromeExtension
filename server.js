require('dotenv').config();
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var Promise = require("bluebird");
var Yelp = require('yelp');
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


//yelp db add=============================
/*
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
*/


//var clientID = process.env.SEAT_CLIENT_ID;
//Seat Geek=========================================
// request('https://api.seatgeek.com/2/events?q=NYC&client_id='+ clientID, function(error, response, body){
// 	if(!error && response.statusCode == 200){
// 		body = JSON.parse(body)
		
// 		for(var i = 0; i<5; i++){
// 			// console.log("Title: ",body.events[i].title)
// 			// console.log("Url: ",body.events[i].url)
// 			// console.log('Venue: ', body.events[i].venue.name)

// 			var concert = new Concert({
// 				concertNumber: i,
// 				title: body.events[i].title,
// 				url: body.events[i].url,
// 				venue: body.events[i].venue.name
// 			});

// 			concert.save(function(err,doc){
// 				if(err){
// 					console.log(err);
// 				}else{
// 					console.log(doc)
// 				}
// 			})
// 		}

// 	}
// });


//App routes ===========================================================
app.use(express.static(process.cwd() + '/public'));

// app.get('/', function(){
// 	res.sendFile(__dirname + '/public/index.html');
// })

app.get('/', function(){
	res.sendFile(__dirname + '/public/popup.html');
	console.log('popup sent');
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