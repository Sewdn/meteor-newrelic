if(Meteor.settings.newrelic) {
  _.each(_.keys(Meteor.settings.newrelic), function(key) {
    process.env["NEW_RELIC_" + key.toUpperCase()] = Meteor.settings.newrelic[key];
  });
}

var key = process.env.NEW_RELIC_LICENSE_KEY;
if (typeof(key) !== 'undefined') {
  process.env.NEW_RELIC_NO_CONFIG_FILE = true;
  if(!process.env.NEW_RELIC_LOG_LEVEL) {
    process.env.NEW_RELIC_LOG_LEVEL = 'info';
  }
  if(!process.env.NEW_RELIC_APP_NAME) {
    process.env.NEW_RELIC_APP_NAME = 'meteor-app';
  }
  newrelic = Npm.require('newrelic');
};
