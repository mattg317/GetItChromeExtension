require('dotenv').config();
var express = require('express')
var app = express();
var bodyParser = require("body-parser");
var logger = require("morgan");
var request = require('request');

//mongoose schema used====================
var Sports = require('../server/sports.js')

//Morgan======================================================================
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var clientID = process.env.SEAT_CLIENT_ID;
console.log('received');
var team = "new-york-knicks";
request('https://api.seatgeek.com/2/events?performers.slug='+team+'&client_id='+ clientID, function(error, response, body){
	if(!error && response.statusCode == 200){
		body = JSON.parse(body)
		//console.log(body);
		for(var i = 0; i<5; i++){
			console.log("Title: ",body.events[i].title)
			console.log("Url: ",body.events[i].url)
			console.log('Venue: ', body.events[i].venue.name)

			var sports = new Sports({
				eventNumber: i,
				title: body.events[i].title,
				url: body.events[i].url
			});

			sports.save(function(err,doc){
				if(err){
					console.log(err);
				}else{
					console.log(doc)
				}
			})
		}
	}
})

