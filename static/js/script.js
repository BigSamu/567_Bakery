$(document).ready(function () {
  // 0.1) Auxiliar Function for getting width of window (used for defining offset of Scroll)
  var contextwidth = $(document).width();

  $(window).resize(function () {
    contextwidth = $(document).width();
    console.log(contextwidth);
  });

  // 0.2) Auxiliar Function for smooth scrolling to a target element
  function smoothScrollTo(targetHash) {
    // Calculate the height of the navbar
    var navbarHeight = $('.navbar').outerHeight();

    // Define scrollOffset based on the navbar height
    var scrollOffset = -1 * navbarHeight;

    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate(
      {
        scrollTop: $(targetHash).offset().top + scrollOffset,
      },
      800,
      'swing'
    );
  }

  /*------------------------------------------------- 
    1) ADD "SCROLL TO" BEHAVIOUR TO SOME NAV LINKS
    --------------------------------------------------*/

  // Add smooth scrolling to all links
  $('a[href^="#"], a[href^="products.html#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .on('click', function (event) {
      var href = this.getAttribute('href');
      var hash = this.hash;

      if (hash && $(hash).length > 0) {
        // Check if element exists before scrolling
        event.preventDefault();
        smoothScrollTo(hash);
      } else if (href.startsWith('products.html')) {
        // If the link points to a different page (e.g., "products.html"), let the browser handle the redirection
        window.location.href = href;
      }
    });

  // Check for hash in URL when the page loads
  var currentHash = window.location.hash;
  if (currentHash && $(currentHash).length > 0) {
    // Wait for the new page to load, then smooth scroll to the hash
    $(window).on('load', function () {
      setTimeout(function () {
        smoothScrollTo(currentHash);
      }, 100);
    });
  }

  /*------------------------------------------------- 
    2) CHANGING STATUS
    --------------------------------------------------*/

  $('.navbar-nav a').on('click', function () {
    $('.navbar-nav').find('a.active').removeClass('active');
    $(this).addClass('active');
  });

  /*------------------------------------------------- 
    3) CONFIGURATION SWIPER LIBRARY FOR PRODUCTS ON INDEX
    --------------------------------------------------*/

  var swiperSomeOfOurFavorites = new Swiper('#swiperSomeOfOurFavorites', {
    // Setting swiper parameters
    speed: 400,
    grabCursor: true,
    loop: true,

    // Navigation swiper components
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // Pagination swiper components
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Keyboard swiper components
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });
});
