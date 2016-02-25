'use strict';

module.exports = function (packageJson, logger) {
  var config = require('./config')(logger);
  var createServer = require('./api');
  var dataset = require('./dataset/reading.json');

  return function (f) {
    var server = createServer(packageJson, config.api.port, dataset);

    server.start(function (err) {
      f(err, server, config);
    });
  };
};
