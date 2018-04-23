var Alexa = require('alexa-sdk');
var definitions = require('data/definitions.js');

var definitionStateHandlers = Alexa.CreateStateHandler('', {

  'LaunchRequest': function() {
    this.emit(':ask', 'Hi, my name is Louise and you can ask me about definitions from Algebraic Structures 2, for example, say, Alexa, ask Louise to define homomorphism');
  },

  'NewSession': function() {
    this.emit(':ask', 'Hi! I can tell you the definitions for terms that you have come across in Algebraic Structures 2! What would you like the definition of?', 'What would you like the definition of?');
  },

  'DefineWord': function() {
    var word = this.event.request.intent.slots.MyKeyword.value;
    var definition = definitions[word];

    if (definition) {
      this.emit(':ask', `${definition}`, 'How else can I help you?');
    } else {
      this.emit(':ask', `Sorry, I don't know the definition of ${word}`, 'Try and ask me something else!');
    }
  }

});

module.exports = definitionStateHandlers;