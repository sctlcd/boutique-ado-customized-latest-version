$(document).ready(function() {

  // Display a bottom border in the fixed navbar when scroll down
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      $('header').removeClass('fixed-top');
    } else {
      $('header').addClass('fixed-top');
    }
  });

  $('.toast').toast('show');

});
