$(document).ready(function() {

  // Display a bottom border in the fixed navbar when scroll down
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {
      //this code will execute when when the scrollbar is on the top
      $('header').addClass('bg-transparent');
      $('header').removeClass('bg-hover-white');
      $('header').removeClass('fixed-top');

      //this code will execute when the header is hovered
      $('header').hover(function() {
          //this code will execute when mouse enters the html element
          $('header').removeClass('bg-transparent');
          $('header').addClass('bg-hover-white');
        },
        function() {
          //this code will execute when mouse leaves the html element
          $('header').addClass('bg-transparent');
          $('header').removeClass('bg-hover-white');
        });

    } else {
      //this code will execute when the scrollbar is not on the top
      $('header').removeClass('bg-transparent');
      $('header').addClass('bg-hover-white');
      $('header').addClass('fixed-top');

      //this code will execute when the header is hovered
      $('header').hover(function() {
          //this code will execute when mouse enters the html element
          $('header').removeClass('bg-transparent');
          $('header').addClass('bg-hover-white');
          $('header').addClass('fixed-top');
        },
        function() {
          //this code will execute when mouse leaves the html element
          $('header').removeClass('bg-transparent');
          $('header').addClass('bg-hover-white');
          $('header').addClass('fixed-top');
        });
    }
  });

  $('.toast').toast('show');
  
});
