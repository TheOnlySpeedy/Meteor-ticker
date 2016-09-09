Template.NewTickModal.events({
  "submit .new-tick": (event) => {
    event.preventDefault();
    let tick = event.target.tick.value;
    Ticks.insert({msg: tick, createdAt: new Date(), userId: Meteor.userId()});
  }
});
