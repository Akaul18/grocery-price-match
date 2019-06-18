$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $('header nav.navbar').addClass('navBarWhite');
        $('header .navbar-dark .navbar-nav .nav-link').addClass('navBarLinksDarkBlue');
        $('#navSearchBar').addClass('searchBarWhiteNav');
        $('.navbar-dark .navbar-toggler').addClass('custom-toggler');
        $('#logoWhite').addClass('hidden');
        $('#logoBlue').removeClass('hidden');
      }
      if ($(this).scrollTop() < 50) {
        $('header nav.navbar').removeClass('navBarWhite');
        $('header .navbar-dark .navbar-nav .nav-link').removeClass('navBarLinksDarkBlue');
        $('#navSearchBar').removeClass('searchBarWhiteNav');
        $('.navbar-dark .navbar-toggler').removeClass('custom-toggler');
        $('#logoWhite').removeClass('hidden');
        $('#logoBlue').addClass('hidden');
      }
   });
});
