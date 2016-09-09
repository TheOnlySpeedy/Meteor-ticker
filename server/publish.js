Meteor.publish("ticks", function(){
  return Ticks.find({});
});

Meteor.publish("allUsers", function(){
  return Meteor.users.find({});
});
