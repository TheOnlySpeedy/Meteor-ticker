if(Meteor.isClient){
  console.log("register tick click events");
  $(function(){
    $('.tick').mousedown(function(e){
      $(this).addClass("clickHold");
    });
    $('.tick').mouseup(function(e){
      $(this).removeClass("clickHold");
    });
  });
}
