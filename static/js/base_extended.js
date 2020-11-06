$(document).ready(function() {

  // White navbar
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

  // Hide the navbar collapse menu
  function hideNavbarCollapseMenu() {
    $('.navbar-collapse').removeClass('show');
    $('#main-nav').removeClass('navbar-mobile');
    $('#main-nav').addClass('navbar-desktop');
  }

  // Initialisation (page not scrolled)
  function init() {
    bgWhite();
    navbarNotFixedTop();
  }

  // Trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').on('click', function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
    $('#main-nav').toggleClass('navbar-desktop');
  });

  // Trigger the click event on the wrapper class element
  $('.wrapper').on('click', function(event) {
    if ($('.navbar-mobile#main-nav').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // Trigger the click event on the user-options id element
  $('.navbar #user-options').on('click', function(event) {
    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // Trigger the click event on the mobile-search id element
  $('#mobile-search').on('click', function(event) {
    // Reset the value of the text input
    $('.dropdown-menu-mobile-search input').val('');

    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  // Trigger the click event on the footer class element
  $('.footer').on('click', function(event) {
    if ($('#main-nav.show').is(':visible')) {
      // Collapse the navbar collapse menu
      hideNavbarCollapseMenu();
    }
  });

  init();

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
