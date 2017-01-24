var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SportSchema = new Schema({
	eventNumber:{
		type: Number
	},
	title:{
		type: String
	},
	url:{
		type: String
	}
});

var Sports = mongoose.model("Sports", SportSchema);
module.exports = Sports;