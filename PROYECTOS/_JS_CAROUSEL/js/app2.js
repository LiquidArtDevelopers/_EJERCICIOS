document.body.addEventListener("click", function (e) {
    
    /* declaramos variable global */
    var ordenprincipal, ordensiguiente

    /* si hago click en flecha der */
    if(e.target.id=="imgder"){
        /* coger de la img principal la propiedad "orden" */
        ordenprincipal = document.getElementById("img00").getAttribute("orden");

        /* convirtiendo a número la variable ordenprincipal */
        ordenprincipal = Number(ordenprincipal)

        /* le sumo 1  */
        ordensiguiente = ordenprincipal + 1
        
       /* le cambio las propiedades a la etiqueta imagen del html para que muestre otra foto (pues le cambio el src) */
        document.getElementById("img00").src = `imagenes/foto0${ordensiguiente}.jpg`
        document.getElementById("img00").setAttribute("orden",ordensiguiente)

    }   

    /* si hago click en flecha izd */
    if(e.target.id=="imgizd"){
        
    }

})