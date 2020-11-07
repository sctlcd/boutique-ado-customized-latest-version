$(document).ready(function() {

  // Tranparent navbar
  function bgTransparent() {
    $('.header').addClass('bg-transparent');
    $('.header').removeClass('bg-hover-white-no-transition');
    $('.header').removeClass('bg-hover-white');
  }

  // White navbar
  function bgWhite() {
    $('.header').removeClass('bg-transparent');
    $('.header').removeClass('bg-hover-white-no-transition');
    $('.header').addClass('bg-hover-white');
  }

  // White navbar with no transition
  function bgWhiteNoTransition() {
    bgWhite();
    $('.header').addClass('bg-hover-white-no-transition');
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

    bgTransparent();
    navbarNotFixedTop();

    // // This code will execute when navbar collapse menu, desktop navbar dropdown menu,
    // //user options dropdown menu are visible or when the header is currently hovered
    // if ($('#main-nav.show').is(':visible') ||
    //   $('.header .list-inline-item.show').is(':visible') ||
    //   // $('.navbar .nav-item.show').is(':visible') ||
    //   $('.header').is(':hover')) {
    //   bgWhiteNoTransition();
    // } else {
    //   bgTransparent();
    // }

    //this code will execute when the header is hovered
    $('.header').hover(function() {
        //this code will execute when mouse enters the header class element
        bgWhite();
      },
      function() {
        //this code will execute when mouse leaves the header class element
        // bgTransparent();
        // navbarNotFixedTop();
        if ($('#main-nav.show').is(':visible') ||
          $('.header .list-inline-item.show').is(':visible')) {
          bgWhiteNoTransition()
        } else {
          bgTransparent();
        }
      });
  }

  // Page on scroll
  function onPageScroll() {

    bgWhite();
    navbarFixedTop();

    //this code will execute when the header is hovered
    $('.header').hover(function() {
        //this code will execute when mouse enters the header class element
        bgWhiteNoTransition();
      },
      function() {
        //this code will execute when mouse leaves the header class element
        bgWhiteNoTransition();
      });
  }

  // trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').click(function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
    $('#main-nav').toggleClass('navbar-desktop');
  });

  // trigger the click event on the hero-image class element
  $('.hero-image').click(function(event) {

    //this code will execute when when the scrollbar is on the top
      if ($(window).scrollTop() == 0) {

        //This code will execute when when the scrollbar is on the top
        if ($('#main-nav.show').is(':visible')) {
            hideNavbarCollapseMenu();
            bgTransparent();
        } else {
          bgTransparent();
        }
      } else {

        //this code will execute when the scrollbar is not on the top
        if ($('#main-nav.show').is(':visible')) {
            hideNavbarCollapseMenu();
            bgWhite();
        } else {
          bgWhite();
        }
      }
  });

// trigger the click event on the features-showcase-testimonial class element
$('.features-showcase-testimonial').click(function(event) {

  if ($('.navbar-mobile#main-nav').is(':visible')) {
    hideNavbarCollapseMenu();
  }
});

// trigger the click event on the gallery class element
$('.gallery').click(function(event) {

  if ($('.navbar-mobile#main-nav').is(':visible')) {
    hideNavbarCollapseMenu();
  }
});

// trigger the click event on the footer class element
$('.footer').click(function(event) {
  //
  if ($('.navbar-mobile#main-nav').is(':visible')) {
    hideNavbarCollapseMenu();
  }
});

// trigger the click event on the user-options id element
$('.navbar #user-options').click(function(event) {
  // collapse the navbar collapse menu
  if ($('#main-nav.show').is(':visible')) {
    hideNavbarCollapseMenu();
  }
});

// trigger the click event on the mobile-search id element
$('#mobile-search').click(function(event) {
  // reset the value of the text input
  $('.dropdown-menu-mobile-search input').val('');
  // collapse the navbar collapse menu
  if ($('#main-nav.show').is(':visible')) {
    hideNavbarCollapseMenu();
  }

});

init();

// When scroll down display a bottom border in the fixed navbar,
// including the navbar collapse menu when this one is visible
$(window).scroll(function() {

  //this code will execute when when the scrollbar is on the top
  if ($(this).scrollTop() == 0) {
    //This code will execute when when the scrollbar is on the top
    init();
  } else {

    //this code will execute when the scrollbar is not on the top
    onPageScroll();
  }
});

$('.toast').toast('show');

});
