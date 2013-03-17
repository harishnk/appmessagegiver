var messageController = require('../controllers/messages.js').Messages;

var app = module.parent.exports.app;

//Wire-up everything

app.get('/', function(req, res, next){
    res.render('Not implemented')});

// http://appmessagegiver.harishnk.c9.io/messages/getSince?date=2013-03-16
app.get('/messages/getSince', function(req, res, next){
    messageController.getMessagesSince(req, res, next);
});