require('dotenv').config();
var Yelp = require('yelp');

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
