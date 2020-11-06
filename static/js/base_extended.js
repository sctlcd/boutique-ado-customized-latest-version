$(document).ready(function() {

  function bgWhite() {
    $('.header').addClass('bg-white');
  }

  // Navbar not fixed to the top
  function navbarNotFixedTop() {
    $('.header').removeClass('fixed-top');
  }

  // Navbar fixed to the top
  function navbarFixedTop() {
    $('.header').addClass('fixed-top');
  }

  // Initialisation
  function init() {

    bgWhite();

    // trigger the click event on the wrapper class element
    $('.wrapper').click(function(event) {
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
        $('#main-nav').addClass('navbar-desktop');
      }
    });

    // trigger the click event on the mobile-search id element
    $('#mobile-search').click(function(event) {
      // reset the value of the text input
      $('.dropdown-menu-mobile-search input').val('');
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
        $('#main-nav').addClass('navbar-desktop');
      }
    });

    // trigger the click event on the user-options id element
    $('.navbar #user-options').click(function(event) {
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
        $('#main-nav').addClass('navbar-desktop');
      }
    });
  }

  // trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').click(function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
    $('#main-nav').toggleClass('navbar-desktop');
  });

  init();
  navbarNotFixedTop();

  // When scroll down display a bottom border in the fixed navbar,
  // including the navbar collapse menu when this one is visible
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {

      //this code will execute when when the scrollbar is on the top
      navbarNotFixedTop();
    } else {

      //this code will execute when the scrollbar is not on the top
      navbarFixedTop();
    }
  });

  $('.toast').toast('show');

});
