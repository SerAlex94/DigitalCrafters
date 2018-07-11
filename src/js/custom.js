$(document).ready(function() {

    $('.nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.nav-menu').slideToggle(400);
    });

    $('.about-client__slider').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        dots: true,
        appendArrows: ".about-client__slider-controls",
        appendDots: ".about-client__slider-controls",
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.png" alt="<" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/right.png" alt=">" /></button>'
    });

    $('.portfolio-slider').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        dots: false,
        prevArrow: $('.slider-prev'),
        nextArrow: $('.slider-next'),
    });
});



var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
