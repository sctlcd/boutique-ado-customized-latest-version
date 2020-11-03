$(document).ready(function() {

  function navbarNotFixedTop() {
    $('.header').removeClass('fixed-top');
  }

  function navbarFixedTop() {
    $('.header').addClass('fixed-top');
  }

  function init() {

    $('.header').addClass('bg-white');
    $('.header').addClass('bg-hover-white');
    navbarNotFixedTop();

    // trigger the click event on the header class element
    $('.header').click(function(event) {
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the wrapper class element
    $('.wrapper').click(function(event) {
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
  }

  function onPageScroll() {
    navbarFixedTop();

    // trigger the click event on the header class element
    $('.header').click(function(event) {
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the footer class element
    $('.footer').click(function(event) {
      if ($('.navbar-mobile#main-nav').is(':visible')) {
        $('.navbar-collapse').removeClass('show');
        $('#main-nav').removeClass('navbar-mobile');
      }
    });

    // trigger the click event on the wrapper class element
    $('.wrapper').click(function(event) {
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
  }

  // trigger the click event on the navbar-toggler class element
  $('.navbar-toggler').click(function(event) {
    $('#main-nav').toggleClass('navbar-mobile');
  });

  init();

  // When scroll down display a bottom border in the fixed navbar,
  // including the navbar collapse menu when this one is visible
  $(window).scroll(function() {
    if ($(this).scrollTop() == 0) {

      //this code will execute when when the scrollbar is on the top
      init();
    } else {

      //this code will execute when the scrollbar is not on the top
      onPageScroll();
    }
  });

  $('.toast').toast('show');

});
