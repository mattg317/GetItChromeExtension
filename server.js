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

//Mongoose=============
mongoose.connect('mongodb://localhost/myapp')

var db = mongoose.connection;

db.on('error', function(err){
	console.log(("Mongoose Error: ", err))
})

db.once("open", function(){
	console.log("Mongoose connection successful.");
});

//using public folder
app.use(express.static('./public'));

app.get('/', function(){
	res.sendFile(__dirname + '/public/index.html');
})

app.post("/api", function(req, res){
	console.log(req.body)

})



//CHeerio==============================================
var request = require("request");
var cheerio = require("cheerio");

console.log("\n******************************************\n" +
            "Grabbing every article headline and link\n" +
            ":" +
            "\n******************************************\n");
var link = "http://www.jerseycityindependent.com/events/"


request(link, function(error, response, html){

	//var $ = cheerio.load(html);
	var $ = cheerio.load("<div class=type-tribe_events> </div> ")

	var results = [];

	// $("h4.headline-link").each(function(i, element){

	// 	var title = $(this).text();

	// 	var link = $(element).parent().attr("href");

	// 	results.push({
	// 		title: title,
	// 		link: link
	// 	});

	// });

	//target coupons 

	// $("div.pods").each(function(i, element){
	// 	//var title = $(this).children().children('div.pods').children('div.bd').children("div.offer-details");

	// 	//pull titles of comp
	// 	var title = $(this).children('div').children().children('div').children('div.offer-details').text()
	// 			console.log(title);
	// 	// results.push({
	// 	// })
	// })

	$('div').each(function(i, element){
		var title = $(this)
		//var title = $(this).children().children("h2").text()
		console.log(title)
	})


	console.log(results);
})


//Set server to listen
app.listen(PORT, function(){
	console.log("App listening on PORT: "+ PORT);
})