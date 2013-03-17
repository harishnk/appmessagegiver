var messagesModel = require('../model/messages').Messages;
var config = require('../config').config;

var Messages = function() {
    this.getMessagesSince  = function(req, res, next){
           // console.log(req.query.date);
            messagesModel.getMessagesSince(req.query.date, function(err, data){
      if(err){
          next(err);
          return;
      }
      res.send(data);
    })
    }
}
module.exports.Messages = new Messages();