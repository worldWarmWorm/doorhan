$(document).ready(function () {

    // slider
    $('.header__slider').slick({
        infinite: true,
        prevArrow: '<button type="button" class="slick-prev slick-btn"></button>',
        nextArrow: '<button type="button" class="slick-next slick-btn"></button>',
        fade: true,
        dots: true
        // autoplay: true,
        // autoplaySpeed: 5000
        
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

    // toggle buttons
    $('.toggle-button_1').click(function () {
        $('.item-1__content').toggle(300);

        if ($('.toggle-button .show-icon')) {
            $('.toggle-button .show-icon').hide();
            $('.toggle-button .hide-icon').show();
        } else {
            $('.toggle-button .hide-icon').hide();
            $('.toggle-button .show-icon').show();
        }
    });


    $('.toggle-button_2').click(function () {
        $('.item-2__content').toggle(300);
    });

});