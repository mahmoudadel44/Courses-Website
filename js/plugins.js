/*global $ , jQuery , alert */

$(document).ready(function () {

    "use strict";
    
// Nice Scroll
$("html").niceScroll();

$('.carousel').carousel({
    interval: 5000
});

  //create a hidden navbar with bootstrap that shows after scroll

 (function ($) {
    $(document).ready(function(){
  
      // hide .navbar first
      $(".navbar").hide();
  
      // fade in .navbar
      $(function () {
          $(window).scroll(function () {
  
                   // set distance user needs to scroll before we start fadeIn
              if ($(this).scrollTop() > 100) {
                  $('.navbar').fadeIn();
              } else {
                  $('.navbar').fadeOut();
              }
          });
      });
  
  });
    }(jQuery));
    $(document).ready(function() {
        $("#reasons").click(function() {
            $("#reasons").addClass("wow fadeInUpBig animated");
          $(".help").toggleClass("animated");
        });
      });
});
