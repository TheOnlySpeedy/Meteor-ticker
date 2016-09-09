import moment from 'moment';

Meteor.startup(() => {

  let jetzt = moment();
  let vorher = moment();
  vorher.subtract(20, "seconds");
  let warSchon = moment();
  warSchon.subtract(30, "minutes");
  let wann = moment();
  wann.subtract(5, "hours");
  let gestern = moment();
  gestern.subtract(1, "days");
  let laengerHer = moment();
  laengerHer.subtract(12, "days");
  let frueher = moment();
  frueher.subtract(6, "months");

  const ticks = [
    {
      msg: "Tick",
      createdAt: jetzt,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: vorher,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: warSchon,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: wann,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: gestern,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: laengerHer,
      userId: "yv2k9qWFhb4Ab9nqd",
    },
    {
      msg: "Tick",
      createdAt: frueher,
      userId: "yv2k9qWFhb4Ab9nqd",
    }
  ]

  ticks.forEach((tick) => Ticks.insert(tick));
});
