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

    $("form").submit(function(e) {
        e.preventDefault();

        // think how you can optimize this function !!!
        // with some cycle

        // fill this obj with data from input - obj { key: value }

        var obj = {};
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var inputs = e.target.querySelectorAll('input');

        for (var input of inputs) {

            if (input.value) {
                if (input.name === "email") {
                    $(input).removeClass("error");
                    obj[input.email] = input.value;
                    alert('Your request have been sent');
                    console.log(obj);
                } else {
                    $(input).addClass("error");
                    alert('Please enter your email');
                }
                $(input).removeClass("error");
                obj[input.name] = input.value;
            } else {
                $(input).addClass("error");
                alert('Please enter your name');
                break;
            }


            // $(input).addClass("error");
            // alert('Please enter your name');
        }


        // obj['name'] = inputs[0].value;
        // obj['email'] = inputs[1].value;



        // if (!name.val()) {
        //     name.addClass("error");
        //     alert('Please enter your name');
        // }
        // else if (!email.val()) {
        //     email.addClass("error");
        //     alert('Please enter your email');
        // }
        // else if (!pattern.test(email.val())) {
        //     email.addClass("error");
        //     alert('Please enter correct email');
        // }
        // else {
        //     alert('Your request have been sent');
        //     this.reset();
        // }
        //
        // if (name.val()) name.removeClass("error");
        // if (email.val() && pattern.test(email.val())) email.removeClass("error");
    });
});