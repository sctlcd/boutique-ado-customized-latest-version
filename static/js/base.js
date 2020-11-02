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

  function closeMenuBgTransparent() {
    bgTransparent();
    navbarNotFixedTop();
  }

  function closeMenuBgWhiteNoTransition() {
    bgWhiteNoTransition();
    navbarNotFixedTop()
  }


  bgTransparent();
  navbarNotFixedTop();

  //this code will execute when navbar collapse menu, desktop navbar dropdown menu or user options dropdown menu are visible
  // this code will execute when navbar collapse menu is visible
  if ($('#main-nav.show').is(':visible') || $('header .list-inline-item.show').is(':visible') || $('nav .nav-item.show').is(':visible')) {
    bgWhiteNoTransition();
  } else {
    bgTransparent();
  }

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

      //this code will execute when navbar collapse menu, desktop navbar dropdown menu or user options dropdown menu are visible
      if ($('#main-nav.show').is(':visible') || $('header .list-inline-item.show').is(':visible') || $('nav .nav-item.show').is(':visible')) {
        bgWhiteNoTransition();
      }
    });

    // this code will execute when the navbar-toggler class element is clicked
    $('.navbar-toggler').click( function(event) {
      $('#main-nav').toggleClass('navbar-mobile');
    });

    // this code will execute when the hero-image section is clicked
    $('.hero-image').click( function(event) {
      closeMenuBgTransparent();
    });

    // this code will execute when the header class element is clicked
    $('.header').click( function(event) {
      closeMenuBgWhiteNoTransition();
    });

    // this code will execute when the hero-image section is clicked
    $('.hero-image').click( function(event) {
      closeMenuBgTransparent();
      $('.navbar-collapse').removeClass('show');
      $('#main-nav').removeClass('navbar-mobile');
    });

    // this code will execute when the mobile-search id is clicked
    $('#mobile-search').click(function(event) {
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

    // this code will execute when the user-options id is clicked
    $('.navbar #user-options').click(function(event) {
      // collapse the navbar collapse menu
      if ($('#main-nav.show').is(':visible')) {
        $('#main-nav').removeClass('show');
      }
    });

  // When scroll down display a bottom border in the fixed navbar, including the navbar collapse menu when this one is visible
  $(window).scroll(function() {
    //this code will execute when when the scrollbar is on the top
    if ($(this).scrollTop() == 0) {

      bgTransparent();
      navbarNotFixedTop();


      //this code will execute when navbar collapse menu, desktop navbar dropdown menu or user options dropdown menu are visible
      if ($('#main-nav.show').is(':visible') || $('header .list-inline-item.show').is(':visible') || $('nav .nav-item.show').is(':visible')) {
        bgWhiteNoTransition();
      } else {
        bgTransparent();
      }

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

          //this code will execute when navbar collapse menu, desktop navbar dropdown menu or user options dropdown menu are visible
          if ($('#main-nav.show').is(':visible') || $('header .list-inline-item.show').is(':visible') || $('nav .nav-item.show .dropdown-menu.show').is(':visible')) {
            bgWhiteNoTransition();
          }
        });

    } else {
      //this code will execute when the scrollbar is not on the top
      bgWhiteNoTransition();
      navbarFixedTop();

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
  });

  $('.toast').toast('show');

});
