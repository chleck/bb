Bbs = new Mongo.Collection('bbs');

Bbs.allow({
  insert: function(userId, bb) {
    return true;
  },
  update: function(userId, bb, fields, modifier) {
    return true;
  },
  remove: function(userId, bb) {
    return true;
  }
});