var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var EventSchema = new Schema({
	title:{
		type: String
	},
	url:{
		type: String
	}
});

var Event = mongoose.model("Event", EventSchema);
module.exports = Event;