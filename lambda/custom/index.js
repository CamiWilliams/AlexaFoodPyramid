/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk-core');

const LaunchRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput) {
    const speechText = 'Welcome to the the Food Pyramid skill. You can ask about the different tiers or a specific food group!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./homepage.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const GrainsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'GrainsIntent';
  },
  handle(handlerInput) {
    const speechText = 'These foods provide complex carbohydrates, which are a good source of energy but provide little nutrition.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Grains - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./grains.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const VegetablesIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'VegetablesIntent';
  },
  handle(handlerInput) {
    const speechText = 'A vegetable is a part of a plant consumed by humans that is generally savory but is not sweet. A vegetable is not considered a grain, fruit, nut, spice, or herb.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Vegetables - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./vegetables.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const FruitsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FruitsIntent';
  },
  handle(handlerInput) {
    const speechText = 'Fruits are the sweet-tasting seed-bearing parts of plants, or occasionally sweet parts of plants which do not bear seeds.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Fruits - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./fruits.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const DairyIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'DairyIntent';
  },
  handle(handlerInput) {
    const speechText = 'Dairy products are produced from the milk of mammals. They include milk, yogurt and cheese.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Dairy - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./dairy.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const MeatsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'MeatsIntent';
  },
  handle(handlerInput) {
    const speechText = 'Meat is the tissue – usually muscle – of an animal consumed by humans. Since most parts of many animals are edible, there is a vast variety of meats.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Meats - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./meats.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const FatsIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'FatsIntent';
  },
  handle(handlerInput) {
    const speechText = 'These foods provide calories, but not much nutrition. These foods include salad dressings, sugars, soft drinks, candies, and desserts.';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Fats - Food Pyramid', speechText)
      .addDirective({
          type: 'Alexa.Presentation.APL.RenderDocument',
          document: require('./fats.json'),       
          datasources: {}
      })
      .getResponse();
  },
};

const HelpIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    const speechText = 'You can ask about the different tiers or a specific food group!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .reprompt(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const CancelAndStopIntentHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
        || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    const speechText = 'Goodbye!';

    return handlerInput.responseBuilder
      .speak(speechText)
      .withSimpleCard('Hello World', speechText)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    return handlerInput.requestEnvelope.request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, I can\'t understand the command. Please say again.')
      .reprompt('Sorry, I can\'t understand the command. Please say again.')
      .getResponse();
  },
};

const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GrainsIntentHandler,
    VegetablesIntentHandler,
    FruitsIntentHandler,
    DairyIntentHandler,
    MeatsIntentHandler,
    FatsIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    SessionEndedRequestHandler
  )
  .addErrorHandlers(ErrorHandler)
  .lambda();
