'use strict';

var HTTP_OK = 200;

module.exports = {
  $get: function (request, reply) {
    reply('hello ' + request.query.name).code(HTTP_OK);
  }
};
