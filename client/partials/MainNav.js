import { Meteor } from 'meteor/meteor';

Template.MainNav.events({
  "click .login-toggle": () => {
    Session.set("nav-toggle", "open");
  },
  "click .logout": () => {
    AccountsTemplates.logout();
  }
});

Template.MainNav.helpers({
  userFullName: function(){
    let user = Meteor.user();
    return user.profile.firstName + " " + user.profile.lastName;
  }
});
