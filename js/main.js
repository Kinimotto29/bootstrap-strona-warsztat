$(function () {

    $('.blur').click (function () {
        this.blur();
    });

    $(window).scroll(function () {

        if ($(window).scrollTop() > 1) {
            $('.navbar').css({
                'background-color': 'rgba(14, 216, 214, 0.8)',
                'color': '#363636;'
            });
            $('.nav-link').addClass('menu-grey');
            $('.navbar-brand').addClass('menu-grey');


        } else {
            $('.navbar').css('background-color', 'transparent');
            $('.nav-link').removeClass('menu-grey');
            $('.navbar-brand').removeClass('menu-grey');
        }

    });
    

});