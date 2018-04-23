var Alexa = require('alexa-sdk');

// Handlers
var definitionStateHandlers = require('./handlers/definitionStateHandlers');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(
    definitionStateHandlers
  );
  alexa.state = '_DEFINITION';
  alexa.execute();
};