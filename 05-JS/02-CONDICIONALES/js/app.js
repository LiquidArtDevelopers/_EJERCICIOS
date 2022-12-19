
//Opción de selección de foto desde la galería
function mostrar(imagen){
    //paramos el pase automático
    clearInterval(intervalo);
    clearTimeout(conta);
    contador();

    document.getElementById('img00').src = document.getElementById(imagen).src        
}


//Opción de selección de fotos desde las flechas
const carrusel= function (imagen, boton){
    
    //paramos el pase automático
    clearInterval(intervalo);
    clearTimeout(conta);
    contador();
    
    ordenActual = document.getElementById(imagen).getAttribute('orden');
    boton = Number(boton);
    ordenActual = Number(ordenActual);
    ordenResultado = (ordenActual+boton);
    console.log(ordenResultado);

    switch(ordenResultado){
        case 0:
            //ponemos la 6     
            document.getElementById('img00').src = document.getElementById('img0'+5).getAttribute('src');
            document.getElementById('img00').setAttribute("orden", 5);
            
            break;
        case 6:
            //ponemos la 1
            document.getElementById('img00').src = document.getElementById('img0'+1).getAttribute('src');
            document.getElementById('img00').setAttribute("orden", 1);
            break;
        default:
            //ponemos la que toca según variable
            document.getElementById('img00').src = document.getElementById('img0'+ordenResultado).getAttribute('src');
            document.getElementById('img00').setAttribute("orden", ordenResultado);                    
    }
    fade()
}

//cargar las fotos pequeñas desde el javascript
//declaramos variable constante "inferior" con valor del selector que tenga clase ".inferior"
const inferior= document.querySelector('.inferior');
//declaramos template_string como vacío, y resto de variables también
let template_string="",numfotos=10;

//recorremos un for para crear el html del template_string teniendo en cuenta el valor de la iteración
for(let i=1; i<=numfotos; i++){
    //añadimos al valor de template_string el valor de template_string + la iteración
    template_string+=`      
    <img id="img0${i}" orden="${i}" src="imagenes/foto0${i}.jpg" alt="" onclick="mostrar('img0${i}')">        
    `;
    console.log(i)
}
//en la variable constante interior (del selector) insertamos HTML "aferbegin" (que irá dentro y al principio) y la variable con el HTML
inferior.insertAdjacentHTML('afterbegin',template_string); 


//vamos a hacer que haya un pase de diapositivas
let intervalo;
pase();
function pase(){
    intervalo=window.setInterval(random,2000)
}

//función pase que cogerá un número aleatorio para mostrar una imagen
let numAle=0;
function random(){
    numAle=Number(numAle);
    numAle = Math.ceil(Math.random()*10);
    document.getElementById('img00').src = document.getElementById('img0'+numAle).getAttribute('src');
    console.log(numAle);
    fade();
}

//función que llamará a la función pase cada 5 segundos
let conta;
function contador(){
    conta = window.setTimeout(pase,5000);
}

//función que alternará entre dos clases para darle un efecto de face
function fade(){
    
    clase = document.getElementById('img00').className;
    if (clase == "fade"){
        document.getElementById('img00').className = 'fadee';
    }else{
        document.getElementById('img00').className = 'fade';
    }
}