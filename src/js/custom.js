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

        var obj = {};
        var pattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        var inputs = e.target.querySelectorAll('input');

        // for...of, к сожалению, это ES6. Так что я неправильно тебе подсказал и для этого случая он не подходит
        // вариант 1
        // for (var i of inputs) {
        //     if (inputs[i].value) {
        //         if (inputs[i].name === "email") {
        //             $(inputs[i]).removeClass("error");
        //             obj[inputs[i].email] = inputs[i].value;
        //             alert('Your request have been sent');
        //             console.log(obj);
        //         } else {
        //             $(inputs[i]).addClass("error");
        //             alert('Please enter your email');
        //         }
        //         $(inputs[i]).removeClass("error");
        //         obj[inputs[i].name] = inputs[i].value;
        //     } else {
        //         $(inputs[i]).addClass("error");
        //     }
        // }

        // вариант 2
        // for (var i in inputs) {
        //     if (inputs[i].value) {
        //         if (inputs[i].name === "email") {
        //             if (pattern.test(inputs[i].value)) {
        //                 $(inputs[i]).removeClass("error");
        //                 obj[inputs[i].name] = inputs[i].value;
        //             } else {
        //                 $(inputs[i]).addClass("error");
        //             }
        //         } else {
        //             $(inputs[i]).removeClass("error");
        //             obj[inputs[i].name] = inputs[i].value;
        //         }
        //     } else {
        //         $(inputs[i]).addClass("error");
        //     }
        // }

        // вариант 3
        // inputs.forEach(function(input) {
        //     obj[input.name] = input.value;
        // });
        //
        // for (var key in obj) {
        //     if (!obj[key]) {
        //         $(e.target).find('input[name=' + key + ']').addClass('error');
        //     } else {
        //         if (key === 'email' && !pattern.test(obj[key])) {
        //             $(e.target).find('input[name=' + key + ']').addClass('error');
        //         } else {
        //             $(e.target).find('input[name=' + key + ']').removeClass('error');
        //         }
        //     }
        // };

        if (e.target.querySelector('.error')) {
            alert(':(');
        } else {
            alert(':)');
            obj.message = $(e.target).find('textarea').val();
            console.log(obj);
        }
    });
});