'use strict'

Meteor.publish('bbs', function(options, searchString) {
  var where = {
    'name': {
      '$regex': '.*' + (searchString || '') + '.*',
      '$options': 'i'
    }
  };
  Counts.publish(this, 'numberOfBbs', Bbs.find(where), {noReady: true});
  return Bbs.find(where, options);
});
