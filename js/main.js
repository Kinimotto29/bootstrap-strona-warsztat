$(function () {
    

    $(window).scroll(function () {
        
        if($(window).scrollTop() > 1) {
            $('.navbar').css({
                'background-color': 'rgba(14, 216, 214, 0.8)',
                'color': '#363636;'
            });
            $('a').addClass('menu-grey');
            
            
        } else {
             $('.navbar').css('background-color', 'transparent');
             $('a').removeClass('menu-grey');
        }

    });



});