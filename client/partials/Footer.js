Template.Footer.events({
  "click .light-switch.on": () => {
    Session.set("light-switch", "dark");
  },
  "click .light-switch.off": () => {
    Session.set("light-switch", "light");
  }
});

Template.Footer.helpers({
  isLightOrDefault: function(){
    let lightswitch = Session.get("light-switch");
    return (lightswitch === null || lightswitch === undefined || lightswitch === "light") ? true : false;
  },
  isDark: function(){
    let lightswitch = Session.get("light-switch");
    return (lightswitch === "dark") ? true : false;
  }
});
