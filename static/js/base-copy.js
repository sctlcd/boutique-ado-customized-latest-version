$(document).ready(function() {

  $('header').addClass('bg-transparent');
  $('header').removeClass('bg-hover-white-no-transition');
  $('header').removeClass('bg-hover-white');
  $('header').removeClass('fixed-top');

  $('header').addClass('bg-transparent');
  $('header').removeClass('bg-hover-white-no-transition');
  $('header').removeClass('bg-hover-white');
  $('header').removeClass('fixed-top');


  //this code will execute when navbar collapse menu, desktop navbar dropdown menu and user options dropdown menu are visible
  // this code will execute when navbar collapse menu is visible
  if ($('#main-nav.show').is(':visible')) {
    $('header').removeClass('bg-transparent');
    $('header').addClass('bg-hover-white');
    $('header').addClass('bg-hover-white-no-transition');
  }
  if ($('#main-nav.show').is(':hidden')) {
    $('header').addClass('bg-transparent');
    $('header').removeClass('bg-hover-white-no-transition');
    $('header').removeClass('bg-hover-white');
  }

  // this code will execute when options dropdown menu is visible
  if ($('header .list-inline-item.show').is(':visible')) {
    $('header').removeClass('bg-transparent');
    $('header').addClass('bg-hover-white');
    $('header').addClass('bg-hover-white-no-transition');
  }
  //this code will execute when desktop navbar dropdown menu is visible
  if ($('nav .nav-item.show').is(':visible')) {
    $('header').removeClass('bg-transparent');
    $('header').addClass('bg-hover-white');
    $('header').addClass('bg-hover-white-no-transition');
  }

  //this code will execute when the header is hovered
  $('header').hover(function() {
      //this code will execute when mouse enters the header class element
      $('header').removeClass('bg-transparent');
      $('header').removeClass('bg-hover-white-no-transition');
      $('header').addClass('bg-hover-white');
      $('header').removeClass('fixed-top');
    },
    function() {
      //this code will execute when mouse leaves the header class element
      $('header').addClass('bg-transparent');
      $('header').removeClass('bg-hover-white-no-transition');
      $('header').removeClass('bg-hover-white');
      $('header').removeClass('fixed-top');

      //this code will execute when navbar collapse menu, desktop navbar dropdown menu and user options dropdown menu are visible
      // this code will execute when navbar collapse menu is visible
      if ($('#main-nav.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }
      // this code will execute when options dropdown menu is visible
      if ($('header .list-inline-item.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }
      //this code will execute when desktop navbar dropdown menu is visible
      if ($('nav .nav-item.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }
    });

    // Add navbar-mobile class to differenciate desktop navbar menu and mobile navbar menu
    $('.navbar-toggler').click( function(event) {
      $('.navbar').addClass('navbar-mobile');
    });;
    if ($('.navbar-toggler').is(':hidden')) {
      $('.navbar').removeClass('navbar-mobile');
    }

    function closeMenuBgTransparent() {
      $('header').addClass('bg-transparent');
      $('header').removeClass('bg-hover-white-no-transition');
      $('header').removeClass('bg-hover-white');
      $('header').removeClass('fixed-top');
    }

    function closeMenuBgWhite() {
      $('header').removeClass('bg-transparent');
      $('header').addClass('bg-hover-white');
      $('header').addClass('bg-hover-white-no-transition');
      $('header').removeClass('fixed-top');
    }

    // this code will execute when the hero-image section is clicked
    $('.hero-image').click( function(event) {
      closeMenuBgTransparent()
    });

    // this code will execute when the header tag is clicked
    $('header').click( function(event) {
      closeMenuBgWhite()
    });

  // When scroll down display a bottom border in the fixed navbar, including the navbar collapse menu when this one is visible
  $(window).scroll(function() {
    //this code will execute when when the scrollbar is on the top
    if ($(this).scrollTop() == 0) {

      $('header').addClass('bg-transparent');
      $('header').removeClass('bg-hover-white-no-transition');
      $('header').removeClass('bg-hover-white');
      $('header').removeClass('fixed-top');


      //this code will execute when navbar collapse menu, desktop navbar dropdown menu and user options dropdown menu are visible
      // this code will execute when navbar collapse menu is visible
      if ($('#main-nav.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }
      if ($('#main-nav.show').is(':hidden')) {
        $('header').addClass('bg-transparent');
        $('header').removeClass('bg-hover-white-no-transition');
        $('header').removeClass('bg-hover-white');
      }

      // this code will execute when options dropdown menu is visible
      if ($('header .list-inline-item.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }
      //this code will execute when desktop navbar dropdown menu is visible
      if ($('nav .nav-item.show').is(':visible')) {
        $('header').removeClass('bg-transparent');
        $('header').addClass('bg-hover-white');
        $('header').addClass('bg-hover-white-no-transition');
      }

      //this code will execute when the header is hovered
      $('header').hover(function() {
          //this code will execute when mouse enters the header class element
          $('header').removeClass('bg-transparent');
          $('header').removeClass('bg-hover-white-no-transition');
          $('header').addClass('bg-hover-white');
          $('header').removeClass('fixed-top');
        },
        function() {
          //this code will execute when mouse leaves the header class element
          $('header').addClass('bg-transparent');
          $('header').removeClass('bg-hover-white-no-transition');
          $('header').removeClass('bg-hover-white');
          $('header').removeClass('fixed-top');

          //this code will execute when navbar collapse menu, desktop navbar dropdown menu and user options dropdown menu are visible
          // this code will execute when navbar collapse menu is visible
          if ($('#main-nav.show').is(':visible')) {
            $('header').removeClass('bg-transparent');
            $('header').addClass('bg-hover-white');
            $('header').addClass('bg-hover-white-no-transition');
          }
          // this code will execute when options dropdown menu is visible
          if ($('header .list-inline-item.show').is(':visible')) {
            $('header').removeClass('bg-transparent');
            $('header').addClass('bg-hover-white');
            $('header').addClass('bg-hover-white-no-transition');
          }
          //this code will execute when desktop navbar dropdown menu is visible
          if ($('nav .nav-item.show .dropdown-menu.show').is(':visible')) {
            $('header').removeClass('bg-transparent');
            $('header').addClass('bg-hover-white');
            $('header').addClass('bg-hover-white-no-transition');
          }
        });

    } else {
      //this code will execute when the scrollbar is not on the top
      $('header').removeClass('bg-transparent');
      $('header').addClass('bg-hover-white');
      $('header').addClass('bg-hover-white-no-transition');
      $('header').addClass('fixed-top');

      //this code will execute when the header is hovered
      $('header').hover(function() {
          //this code will execute when mouse enters the header class element
          $('header').removeClass('bg-transparent');
          $('header').addClass('bg-hover-white');
          $('header').addClass('bg-hover-white-no-transition');
          $('header').addClass('fixed-top');
        },
        function() {
          //this code will execute when mouse leaves the header class element
          $('header').removeClass('bg-transparent');
          $('header').addClass('bg-hover-white');
          $('header').addClass('bg-hover-white-no-transition');
          $('header').addClass('fixed-top');
        });
    }
  });

  $('.toast').toast('show');

});
