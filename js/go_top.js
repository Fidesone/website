$(document).ready(function(){

    $('#go-top').click(function(){

        $('body, html').animate({
            scrollTop: '0px'
        }, 1000)
    })

    $(window).scroll(function(){
        if($(this).scrollTop() > 0 ){
            $('#go-top').slideDown(500);

        } else {
            $('#go-top').slideUp(500);
        }
    })

});