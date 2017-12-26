$(document).ready(function(){
  $("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        window.location.hash = hash;
      });
    }
  });
});


$(document).on("scroll", function() {

  if($(document).scrollTop()>400) {
    $("#navbar").removeClass("event").addClass("scrool");
  } 
  else {
    $("#navbar").removeClass("scrool").addClass("event");
  }
  
});
