// Function for resizing background image when window is adjusted
$(document).ready(function(){
    console.log('Hello World')
    // Auxiliar Function for getting width of window (used for defining offset of Scroll)
    var contextwidth = $(document).width()
        
    $(window).resize(function(){
        contextwidth = $(document).width();
        console.log(contextwidth);
    });
    /*------------------------------------------------- 
    1) ADD "SCROLL TO" BEHAVIOUR TO SOME NAV LINKS
    --------------------------------------------------*/

   // Add smooth scrolling to all links
    $('a[href^="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')

    // For the others links scroll when they are clicked
    
    .on('click', function(event) {
    // Prevent default anchor click behavior

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            event.preventDefault();

            // Store hash id of anchor link
            var target = this.hash;
            

            // Define scrollOffset depending on context of webpage (xs, sm, md, lg or xl)
            var scrollOffset = -65 // Default value for large contexts and over
            
            if (contextwidth < 992){
                scrollOffset = -230
            }
            else{
                scrollOffset = -80
            }           

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            // - 70 is the offset/top margin
            $('html, body').animate({
                'scrollTop': $(target).offset().top + scrollOffset
            }, 800, 'swing',function() {
                // Add hash (#) to URL when done scrolling (default click behavior), without jumping to hash
                if (history.pushState) {
                    history.pushState(null, null, target); 
                } 
                else {
                    window.location.hash = target;
                }
                return false; 
            });
            
        } // end if
    
    });

    /*------------------------------------------------- 
    2) CHANGING STATUS
    --------------------------------------------------*/

    $('.navbar-nav a').on('click',function(){
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
            clickable: true
        },

        // Keyboard swiper components
        keyboard: {
            enabled: true,
            onlyInViewport: true,
        },


    })
	
})
