var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ConcertSchema = new Schema({
	concertNumber:{
		type: Number
	},
	title:{
		type: String
	},
	url:{
		type:String
	},
	venue:{
		type: String
	}
});

var Concert = mongoose.model("Concert", ConcertSchema);
module.exports = Concert;