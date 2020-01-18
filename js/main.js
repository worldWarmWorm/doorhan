$(document).ready(function () {

    // gallery

    $('[data-fancybox="gallery"]').fancybox({
        protect: true
    });

    $('[data-fancybox="images"]').fancybox({
        baseClass: "fancybox-custom-layout",
        protect: true,
        infobar: false,
        touch: {
          vertical: false
        },
        buttons: ["close", "thumbs", "share"],
        animationEffect: "fade",
        transitionEffect: "fade",
        preventCaptionOverlap: false,
        idleTime: false,
        gutter: 0,
        caption: function(instance) {
          return '<p class="info-fancy">Подробную информацию о товаре можно узнать позвонив нам</p><div class="call-button-menu-mobile"><a href="tel:79039995511">Позвонить</a></div>';
        }
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