$(document).ready(function(){
    var $cabecera = $('#header');
    var previousScroll = 0;
    $(window).scroll(function(event){
       var scroll = $(this).scrollTop();
       if (scroll > previousScroll && scroll > 200){
           $cabecera.addClass('bgcolor');
       } else {
           $cabecera.removeClass('bgcolor');
       }
       previousScroll = scroll;
    }); 
});