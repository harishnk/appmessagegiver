var config = require('./config').config,
    mongoose = require('mongoose');
	// dbref = require("mongoose-dbref")
var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

mongoose.connect(config.mongohq_url);
// Access the mongoose-dbref module and install everything
// var utils = dbref.utils
// Install the types, plugins and monkey patches
// var loaded = dbref.install(mongoose);
// var DBRef = mongoose.SchemaTypes.DBRef;

var MessagesSchema = new Schema({
  message: {
    language: String,
    text: String
  },
  created: {
    on: Date, //Number, //Date,
    by: String
  }
 // validFrom: Date
}, { collection: 'MessagesMaster' });

mongoose.model('MessagesMaster', MessagesSchema);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
	console.log("Connected");
});

module.exports.mongoose = mongoose;
// module.exports.dbref = dbref;
module.exports.db = db;