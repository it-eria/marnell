
$(function () {
    $(".main").onepage_scroll({
        responsiveFallback: 992,
        sectionContainer: "section",
        easing: "ease",
        animationTime: 800,
        pagination: false,
        updateURL: false,
        beforeMove: function (index) {
            $('*[data-js="scroll-bar"]').mouseenter(function(e) {
                $.fn.disable();
            }).mouseleave(function(e) {
                $.fn.enable();
            });
        },
        afterMove: function (index) {
        },
        loop: false,
        keyboard: true,
        direction: "vertical"
    });

    var slickParameters = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay:true,
        autoplaySpeed:1000
    };


    function slickUnslickCategory() {
        var windowWidth = $(window).width();
        if (windowWidth < 992) {
            if (!$('.books__content__block').hasClass('slick-slider')) {
                $('.books__content__block').slick(slickParameters);
            }
        } else {
            if ($('.books__content__block').hasClass('slick-slider')) {
                $('.books__content__block').slick('unslick');
            }
        }
    }

    slickUnslickCategory();



    // $('.books__content__block').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     dots: false,
    //     responsive: [
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 arrows: false,
    //                 dots: false,
    //                 autoplay:true,
    //                 autoplaySpeed:1000
    //             }
    //         }
    //     ]
    //
    // });

    $("#toggle").click(function () {
        $(this).toggleClass("on");
        $("#resize").toggleClass("active");
    });


    $('[data-js="scroll-bar"]').on("scroll",function (e) {
        console.log(e.type);
    })

});
$(document).ready(function(e){
    $('.has-sub').click(function(){
      $(this).toggleClass('tab');
    });
  });

// Init AOS
AOS.init();