




// cuando se detecte movimiento de scroll llamamos a la función scrollFunction
window.onscroll = function() {scrollFunction()};

//función a la que sólo entraremos cuando esta sea llamada desde el evento
function scrollFunction() {
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
        
        for(const item of document.getElementsByTagName("a")){
            item.style.color="pink";            
            item.style.transition="1s";
        }
        

    } else {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0)";

        for(const item of document.getElementsByTagName("a")){
            item.style.color="white";
            item.style.transition="1s";
        }
    }


    
    



}



/* $(document).ready(function(){
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
}); */
