var config = require('../config').config;
var dbmodule = require('../db');
var db = dbmodule.db;
var mongoose = dbmodule.mongoose;
// var dbref = dbmodule.dbref;


// UserMaster schema was registered in db.js
var MessagesMaster = mongoose.model('MessagesMaster');

var Messages = function() {
   this.getMessagesSince = function(asofdate, next){
      //console.log(Date.parse(asofdate));
      MessagesMaster.find( { "created.on": { $gte: Date.parse(asofdate) } }, function (err, doc){
  		if(err) {
          next(err);
        } else {
        	next(null, doc);
        }
  	} );
  } ;  
};
module.exports.Messages = new Messages();
