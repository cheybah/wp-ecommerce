document.addEventListener('DOMContentLoaded', function () {
    var slideImages = document.querySelectorAll('.slide'),
        dirRight = document.getElementById('dir-control-right'),
        dirLeft = document.getElementById('dir-control-left'),
        current = 0;
    isSliding = false; // Prevent double clicks during transitions


    // If JavaScript is on, apply styling
    function jsActive() {
        for (var i = 0; i < slideImages.length; i++) {
            slideImages[i].classList.add('slider-active');
        }
    }

    // Clear images
    function reset() {
        for (var i = 0; i < slideImages.length; i++) {
            slideImages[i].classList.remove('slide-is-active');
            slideImages[i].style.transform = 'translateY(0)';
        }
    }

    // Initialize slider
    function startSlide() {
        reset();
        slideImages[0].classList.add('slide-is-active');
        setTimeout(function () {
            for (var i = 0; i < slideImages.length; i++) {
                slideImages[i].classList.add('slide-transition');
            }
        }, 20);
    }

    // Slide left
    function slideLeft() {
        if (isSliding) return; // Prevent sliding again until current slide finishes
        isSliding = true;

        reset();
        current--;
        if (current < 0) {
            current = slideImages.length - 1;
        }
        slideImages[current].style.transform = 'translateY(-60%)'; // Move from top
        setTimeout(function () {
            slideImages[current].classList.add('slide-is-active');
            slideImages[current].style.transform = 'translateY(0)';
            isSliding = false;
        }, 500); // Match this delay with CSS transition duration
    }

    function slideRight() {
        if (isSliding) return; // Prevent sliding again until current slide finishes
        isSliding = true;

        reset();
        current++;
        if (current >= slideImages.length) {
            current = 0;
        }
        slideImages[current].style.transform = 'translateY(-60%)'; // Move from bottom
        setTimeout(function () {
            slideImages[current].classList.add('slide-is-active');
            slideImages[current].style.transform = 'translateY(0)';
            isSliding = false;
        }, 500); // Match this delay with CSS transition duration
    }

    dirLeft.addEventListener('click', function () {
        slideLeft();
    });

    dirRight.addEventListener('click', function () {
        slideRight();
    });

    // let autoSlide = setInterval(slideRight, 2000); // Auto-slide every 5 seconds

    // // Pause auto-slide on hover
    // document.querySelector('.wrap').addEventListener('mouseover', function () {
    //     clearInterval(autoSlide);
    // });

    // // Resume auto-slide on mouse leave
    // document.querySelector('.wrap').addEventListener('mouseleave', function () {
    //     autoSlide = setInterval(slideRight, 5000);
    // });

    // Apply styling and initialize the slider
    jsActive();
    startSlide();
});
