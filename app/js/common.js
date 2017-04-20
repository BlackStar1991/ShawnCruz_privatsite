$(document).ready(function () {

    //Цели для Яндекс.Метрики и Google Analytics
    $(".count_element").on("click", (function () {
        ga("send", "event", "goal", "goal");
        yaCounterXXXXXXXX.reachGoal("goal");
        return true;
    }));

    //jquery.matchHeight.js
    //Docs: https://github.com/liabru/jquery-match-height
    $('element').matchHeight();

    //AJAX forms send
    //Docs: http://api.jquery.com/jquery.ajax/
    $("form").submit(function () {
        $.ajax({
            type: "GET",
            url: "mail.php",
            data: $("form").serialize()
        }).done(function () {
            alert("Спасибо за заявку!");
            setTimeout(function () {
                $.fancybox.close();
            }, 1000);
        });
        return false;
    });
    //// Nav Button
    $(".menuBox_mobile").on("click", function () {
        $(".mainNav").toggleClass("hidden-xs");
    });


    ///////// Search button

    $(".searchBox_button").on("click", function (){


        $(".mainNav_box__item").toggleClass("mainNav_box__item_second");
        $(".searchBox").toggleClass("searchBox_margin, searchBox_margin__active");
        $(".searchBox_fild").toggleClass("hidden");
    }

    );
    /// First slick slider

    var boxSlider = $(".boxSlider-phrases");

    boxSlider.slick({

        autoplay: false,
        arrows: true,
        autoplaySpeed: 6000,
        centerPadding: '0',
        dots: false,
        pauseOnDotsHover: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: false
                }
            }
        ]
    });

    // Comments SLider
    var commentsSlider = $(".allComments");

    commentsSlider.slick({

        autoplay: false,
        arrows: false,
        autoplaySpeed: 6000,
        centerPadding: '0',
        dots: true,
        pauseOnDotsHover: true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: false
                }
            }
        ]
    });
    // Brands SLider
    var brandsSlider = $(".sliderTrands-box");

    brandsSlider.slick({

        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        centerPadding: '10',
        slidesToShow: 6,
        slidesToScroll: 1,
        dots: false,
        pauseOnDotsHover: true,
        infinite:true,

        responsive: [
            {
                breakpoint: 769,
                settings: {
                    dots: false
                }
            },
            {
                breakpoint: 320,
                settings: {
                    dots: false
                }
            }
        ]
    });



});
