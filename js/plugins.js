$(document).ready(function () {
    $('.carousel').carousel({
        interval: 7000
    })

    //use nicsscroll
    $(function () {
        $("body").niceScroll({
            cursorcolor: " #E41B17"
        });
    });

    //show color option box when click on the gear
    $('.gear-check').click(function () {
        $('.color-option').fadeToggle(500)
    });

    //change color of layout
    var colorLi = $('.color-option li');
    colorLi
        .eq(0).css('backgroundColor', '#E41B17').end()
        .eq(1).css('backgroundColor', '#e417d3').end()
        .eq(2).css('backgroundColor', '#17a3e4').end()
        .eq(3).css('backgroundColor', '#b2be03');
    colorLi.click(function () {
        $('link[href*="theme"]').attr('href', $(this).attr('data-value'));
        // console.log($(this).attr('data-value'));
    });

    //loading screen
    $(window).on('load', function () {

        $('.loading-page .sk-chase').fadeOut(2000, function () {
            $('body').css('overflow', 'auto');
            $(this).parent().fadeOut(2000, function () {
                $(this).remove();
            });
        });
    });

    //scroll to top
    var scrollButton = $('#scroll-top');
    $(window).scroll(function () {
        $(this).scrollTop() >= 700 ? scrollButton.fadeIn(600) : scrollButton.fadeOut(600)
    });
    scrollButton.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 600)
    });
});