$(document).ready(function() {

    $('.nav-toggle').click(function(){
        $(this).toggleClass('active');
        $('.nav-menu').slideToggle(400);
    });

    $('.about-slider').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        dots: true,
        appendArrows: '.about-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.png" alt="<" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/right.png" alt=">" /></button>',
        dotsClass: 'slick-dots',
    });

    $('.portfolio-slider').slick({
        swipeToSlide: true,
        slidesToShow: 1,
        arrows: true,
        fade: true,
        dots: false,
        appendArrows: '.portfolio-slider__buttons',
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/left.png" alt="<" /></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/right.png" alt=">" /></button>',
    });
});