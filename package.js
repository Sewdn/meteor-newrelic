Package.describe({
  "summary": "Meteor NewRelic agent",
  "name": "sewdn:newrelic",
  "version": "1.22.1",
  "author": "Sewdn (https://twitter.com/Sewdn)",
  "homepage": "https://github.com/Sewdn/meteor-newrelic",
  "git": "https://github.com/Sewdn/meteor-newrelic.git"
});

Npm.depends({
  "newrelic": "1.22.1"
});

Package.on_use(function(api) {
  api.versionsFrom("METEOR@0.9.0");

  if (api.export) {
    api.export('newrelic', 'server');
  }

  api.use(['underscore'], 'server');

  api.add_files('lib/server.js', 'server');
});
