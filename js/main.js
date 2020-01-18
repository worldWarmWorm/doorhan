$(document).ready(function () {

    // gallery

    $('[data-fancybox="gallery"]').fancybox({
        protect: true
    });

    // slider

    $('.header__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        fade: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000

    });

    // to top

    $(window).scroll(function () {
        if ($(this).scrollTop() != 0)
            $('#toTop').fadeIn();
        else
            $('#toTop').fadeOut();
    });
    $('#toTop').click(function () {
        $('body, html').animate({
            scrollTop: 0
        }, 800);
    });


    // mobile menu

    $(".mobile-menu").on("click", function () {
        $(".mobile-menu__items").slideToggle(500);
    });
});