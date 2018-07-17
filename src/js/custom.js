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

    $(".js-open-popup").click(function() {
        $(".popup").fadeIn(300);
        $('body').css('overflow-y', 'hidden');
    });

    $(".js-close-popup").click(function() {
        $(".popup").fadeOut(0);
        $('body').css('overflow-y', 'visible');
    });

    $(".js-scroll-to-top").click(function() {
        $("html, body").animate({ scrollTop: 0}, "slow");
        return false;
    });

    $(".js-scroll-to-footer").click(function() {
        $('html,body').animate({scrollTop: document.body.scrollHeight},"slow");
    });

    $('.js-smooth').click(function(){
        $('html, body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 500);
        return false;
    });

    $(".js-submit").click(function() {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var text = document.getElementById('textarea').value;
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

        if (name === "") {
            $("#name").addClass("error");
            alert('Please enter your name');
        }
        else if (email === "") {
            $("#email").addClass("error");
            alert('Please enter your email');
        }
        else if (!pattern.test(email)) {
            $("#email").addClass("error");
            alert('Please enter correct email');
        }
        else if (text === "") {
            $("#textarea").addClass("error");
            alert('Please enter your question');
        }
        else {
            alert('Your request have been sent');
        }

        if (name !== "") $("#name").removeClass("error");
        if (email !== "" && pattern.test(email)) $("#email").removeClass("error");
        if (text !== "") $("#textarea").removeClass("error");
    });
});





// var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
