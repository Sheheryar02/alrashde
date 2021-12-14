//Init the carousel
initSlider();

function initSlider() {
    $(".banner-wrap").owlCarousel({
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        autoplay: true,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });
}

function startProgressBar() {
    // apply keyframe animation
    $(".slide-progress").css({
        width: "100%",
        transition: "5000ms",

    });
}

function resetProgressBar() {
    $(".slide-progress").css({
        width: 0,
        transition: "width 0s"
    });
}
$('.nav-links li a').click(function() {
    $('.lists').removeClass('active');
    $('.icon').removeClass('active');
})
$('.icon').click(function() {
    $(this).toggleClass('active');
    $('.lists').toggleClass('active');
    $('body').toggleClass('hidden');
});

// ................


if (screen.width < 1073) {
    var owl = $('.services-boxes');
    owl.owlCarousel({
        loop: true,
        nav: true,
        margin: 10,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
    owl.on('mousewheel', '.owl-stage', function(e) {
        if (e.deltaY > 0) {
            owl.trigger('next.owl');
        } else {
            owl.trigger('prev.owl');
        }
        e.preventDefault();
    });
} else {}
// .........................
$('.sub-menu-parent').click(function() {
    $('.sub-menu').toggleClass('active');

});