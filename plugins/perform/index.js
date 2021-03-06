'use strict';

/**
 * The DavisWeather class is the core of the plugin and an
 * instance of DavisWeather is what will be loaded into Davis
 */
class PerformStart {

  /**
   * The main body of work is done in the constructor.
   */
  constructor(davis, options) {
    this.davis = davis;
    this.options = options;

    // This is where we declare our intents.
    this.intents = {
      // Our intent name
      performStart: {
        // A basic description of the intent
        usage: 'Start Perform',

        // Phrases that will trigger our intent. Note that they will not
        // need to be matched exactly in order for the intent to run.
        phrases: [
          'Please welcome people at Perform Paris',
        ],

        // Lifecycle Events are friendly names for the steps that an intent
        // needs to take in order to run successfully. For instance, our intent
        // will need to gather data from the weather underground API, then will
        // need to respond to the user, so I have broken it up into those events.
        lifecycleEvents: [
          'gatherData',
          'respond',
        ],
      },
    };

    // Hooks give intents functionality.
    // They are called serially when an intent is run.
    // They are named using the 'intentName:lifecycleEvent'
    // Each hook is called with 2 arguments: the exchange object,
    // and a context object. The exchange object is the primary
    // interface between Davis, a user, and a plugin. The context
    // object holds any state carried over from previous exchanges.
    this.hooks = {
      'performStart:gatherData': (exchange, context) => null,
      'performStart:respond': (exchange, context) => {
        const resp = 'bohnjour ay bee en venoo a Perform Paris. Its great to be here with such fantastic Dynatrace customers. It seems like a full room!';

        exchange
          .response(resp) // respond to the user
          //.setTarget('performFollowup');   
          .skipFollowUp();
          //return this.davis.pluginManager.run(exchange, 'performFollowup');
          //.smartEnd(); // end the conversation if appropriate
      },
    };
  }
}

// export the plugin so it can be used
module.exports = PerformStart;
