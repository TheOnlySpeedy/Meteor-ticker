import moment from 'moment';

Template.Ticks.onCreated(function(){
  this.autorun(() => {
    this.subscribe("ticks");
  });
  this.autorun(() => {
    this.subscribe("allUsers");
  });
});

Template.Ticks.helpers({
  ticks: function(){
    return Ticks.find();
  },
  fullName: function(userId){
    let user = Meteor.users.findOne({"_id": userId});
    return user.profile.firstName + " " + user.profile.lastName;
  },
  postTime: function(date){
    return moment(date).fromNow();
  }
});
