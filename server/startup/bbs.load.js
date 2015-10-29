Meteor.startup(function() {
  if(Bbs.find().count() === 0) {
    var bbs = [
      {
        'name': 'bb 1'
      },
      {
        'name': 'bb 2'
      }
    ];
    bbs.forEach(function(bb) {
      Bbs.insert(bb);
    });
  }
});