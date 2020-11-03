$(document).ready(function() {

  function bgTransparent() {
    $('.header').addClass('bg-transparent');
    $('.header').removeClass('bg-hover-white-no-transition');
    $('.header').removeClass('bg-hover-white');
  }

  function bgWhite() {
    $('.header').removeClass('bg-transparent');
    $('.header').removeClass('bg-hover-white-no-transition');
    $('.header').addClass('bg-hover-white');
  }

  function bgWhiteNoTransition() {
    bgWhite();
    $('.header').addClass('bg-hover-white-no-transition');
  }

  function navbarNotFixedTop() {
    $('.header').removeClass('fixed-top');
  }

  function navbarFixedTop() {
    $('.header').addClass('fixed-top');
  }

  function init() {

    bgTransparent();
    navbarNotFixedTop();

    //this code will execute when navbar collapse menu, desktop navbar dropdown menu,
    //user options dropdown menu are visible or when the header is currently hovered
    if ($('#main-nav.show').is(':visible') ||
      $('.header .list-inline-item.show').is(':visible') ||
      $('.navbar .nav-item.show').is(':visible') ||
      $('.header').is(':hover')) {
      bgWhiteNoTransition();
    } else {
      bgTransparent();
    }

    // trigger the click event on the header class element
    $('.header').click(function(event) {
      bgWhite();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the hero-image class element
    $('.hero-image').click(function(event) {
      bgTransparent();
      $('.navbar-collapse').removeClass('show');
      $('#main-nav').removeClass('navbar-mobile');
    });

    // trigger the click event on the mobile-search id element
    $('#mobile-search').click(function(event) {
      // reset the value of the text input
      $('.dropdown-menu-mobile-search input').val('');
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

    // trigger the click event on the user-options id element
    $('.navbar #user-options').click(function(event) {
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

    // trigger the click event on the header class element
    $('.header').click(function(event) {
      bgWhite();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    //this code will execute when the header is hovered
    $('.header').hover(function() {
        //this code will execute when mouse enters the header class element
        bgWhite();
        navbarNotFixedTop();
      },
      function() {
        //this code will execute when mouse leaves the header class element
        bgTransparent();
        navbarNotFixedTop();

        //this code will execute when navbar collapse menu, desktop navbar dropdown menu,
        //user options dropdown menu are visible or when the header is currently hovered
        if ($('#main-nav.show').is(':visible') ||
          $('.header .list-inline-item.show').is(':visible') ||
          $('.navbar .nav-item.show').is(':visible')) {
          bgWhiteNoTransition();
        }
      });
  }

  function onPageScroll() {

    bgWhite();
    navbarFixedTop();

    // trigger the click event on the header class element
    $('.header').click(function(event) {
      bgWhite();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the hero-image class element
    $('.hero-image').click(function(event) {
      bgWhite();
      // navbarFixedTop();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the features-showcase-testimonial class element
    $('.features-showcase-testimonial').click(function(event) {
      bgWhite();
      // navbarFixedTop();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the gallery class element
    $('.gallery').click(function(event) {
      bgWhite();
      // navbarFixedTop();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the footer class element
    $('.footer').click(function(event) {
      bgWhite();
      // navbarFixedTop();
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the mobile-search id element
    $('#mobile-search').click(function(event) {
      // reset the value of the text input
      $('.dropdown-menu-mobile-search input').val('');
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

    // trigger the click event on the user-options id element
    $('.navbar #user-options').click(function(event) {
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

    //this code will execute when the header is hovered
    $('.header').hover(function() {
        //this code will execute when mouse enters the header class element
        bgWhiteNoTransition();
        navbarFixedTop();
      },
      function() {
        //this code will execute when mouse leaves the header class element
        bgWhiteNoTransition();
        navbarFixedTop();
      });
  }

  // trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').click(function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
  });

  init();

  // When scroll down display a bottom border in the fixed navbar, including the navbar collapse menu when this one is visible
  $(window).scroll(function() {

    //this code will execute when when the scrollbar is on the top
    if ($(this).scrollTop() == 0) {
      init();
    } else {
      //this code will execute when the scrollbar is not on the top
      onPageScroll();
    }
  });

  $('.toast').toast('show');

});
