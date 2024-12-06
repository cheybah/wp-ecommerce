$(document).ready(function () {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 4,               // Number of visible items
        loop: true,             // Infinite looping
        margin: 10,             // Spacing between items
        autoplay: true,         // Auto-slide enabled
        autoplayTimeout: 500,   // Speed of the autoplay (0.5s)
        autoplayHoverPause: true // Pause on hover
    });

    // Optional Play/Pause buttons (if needed)
    $('.play').on('click', function () {
        owl.trigger('play.owl.autoplay', [2500]); // Resumes autoplay
    });
    $('.stop').on('click', function () {
        owl.trigger('stop.owl.autoplay'); // Stops autoplay
    });
});