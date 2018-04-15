var Alexa = require('alexa-sdk');

exports.handler = function(event, context, callback){
  var alexa = Alexa.handler(event, context);
  alexa.registerHandlers(handlers);
  alexa.execute();
};

// Define handler functions below.
var handlers = {
  'LaunchRequest': function () {
    this.emit(':ask', 'Welcome to my template code!', 'Try saying hello!');
  }
};
