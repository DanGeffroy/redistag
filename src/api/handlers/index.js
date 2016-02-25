

'use strict';

module.exports = function(dataset){
  return {
    hello: require('./hello'),
    lists: require('./lists')(dataset)
  };
};
