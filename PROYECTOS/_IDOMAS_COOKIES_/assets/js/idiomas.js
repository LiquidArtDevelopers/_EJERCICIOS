//SCRIPT PARA CREAR COOKIE DE IDIOMAS CAMBIAR LOS TEXTOS A TRAVÉS DE LOS ARCHIVOS JSON DE IDIOMAS


let idioma="";
let okCookie = false;

//FUNCIÓN INICIAL QUE SE EXPORTA A APP.JS (ESTA SE EJECUTA NADA MÁS CARGA LA WEB)
export default function idiomas(){

    //PONEMOS LOS TEXTOS EN EL IDIOMA CORRESPONDIENTE
    comprobarOkCookie()
    cambioIdioma();
    
    //EN CASO DE QUE HAYA HABIDO CLICK EN SELECCIÓN DE IDIOMA, LO CAMBIAMOS
    document.body.addEventListener("click", function(event){
        if(event.target.classList.contains("idioma")){
            comprobarOkCookie()
            idioma = event.target.id
            //SI HAY ACEPTACIÓN DE COOKIES, GUARDAMOS EL NUEVO IDIOMA EN COOKIE
            if(okCookie==true){
                setCookie("idiomas", idioma, 90)
            }
            //PROCEDEMOS A CAMBIAR EL IDIOMA
            resetearIdioma()
            cambioIdioma()
        }
    });
}

//FUNCIÓN PARA COMPROBAR SI HAY O NO ACEPTACIÓN DE COOKIES
function comprobarOkCookie(){
    const cookie = "aceptarCookies"
    //SI EXISTE COOKIE DE ACEPTAR COOKIES
    if(getCookie(cookie)!=""){
        //EXISTE ACEPTACIÓN DE COOKIES
        okCookie = true
        console.log("okCookie es true")
    //SI NO EXISTE COOKIE DE ACEPTAR COOKIES Y TAMPOCO HAY VALOR EN LA VARIABLE IDIOMA (PUES NO HA HABIDO CAMBIO DE IDIOMA EN LA PÁGINA)
    }else if (getCookie(cookie)=="" && idioma==""){
        console.log("no existe la cookie de aceptar cookies")
        //MOSTRAMOS LA VENTANA PARA ACEPTAR COOKIES
        ventanaCookies()
    }
}


//FUNCIONES GENÉRICAS DE COOKIES
//------------------------------

//CREAR COOKIE
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

//COMPROBAR Y RECOGER COOKIE
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
//--------------------------------


//FUNCIÓN PARA RESETEAR LAS CLASES DE LOS IDIOMAS
 function resetearIdioma(){
    document.querySelector("#eu").classList.remove("idioma-select");
    document.querySelector("#es").classList.remove("idioma-select");
    document.querySelector("#en").classList.remove("idioma-select");
}


//FUNCIÓN PARA CAMBIAR EL IDIOMA
function cambioIdioma(){

    //1- COMPROBAMOS SI YA EXISTE LA COOKIE DE IDIOMAS
    if (getCookie("idiomas")!="") {
        //SI EXISTE LA COOKIE DE IDIOMAS, NOS QUEDAMOS CON SU VALOR
        idioma=getCookie("idiomas");
        console.log("cookie de idioma establecidaa en: "+ idioma);
    } else {         
        //SI NO EXISTE Y LA VARIABLE DE IDIOMAS ES VACÍA, PONEMOS POR DEFECTO EN CASTELLANO       
        if(idioma==""){
            console.log("No hay idioma establecido, establecemos 'es' por defecto");
            idioma = "es"
            if(okCookie==true){
                setCookie("idiomas", idioma, 90)
                console.log("Se guarda cookie por defecto en español, ya que hay aceptación de cookies");
            }
        //EN CASO DE QUE IDIOMAS NO ESTÉ VACÍA, ES PORQUE SE HA ELEGIDO UN IDIOMA DE FORMA MANUAL
        }else{
            console.log("ha habido una selección de idioma manual: " + idioma);
            console.log(okCookie)
            //SI TAL, GUARDAMOS LA COOKIE RENOVADA DE IDIOMAS
            if(okCookie==true){
                setCookie("idiomas", idioma, 90)
                console.log("Se guarda cookie en el idioma seleccionado de forma manual: " + idioma);
            }
        }
    }

    //CAMBIAMOS LA CLASE DE COLOR AL IDIOMA SELECCIONADO
    document.querySelector(`#${idioma}`).classList.add("idioma-select");



    //EN FUNCIÓN DEL VALOR DE IDIOMA ELEGIMOS UNO U OTRO JSON/PHP O SWITCH

    //CON JSON//---------------------------
    let jsonIdioma = "";
    jsonIdioma = `assets/json/${idioma}.json`;    
    
    //RECOGEMOS TODOS LOS ELEMENTOS DEL JSON
    fetch(jsonIdioma)
    .then(response =>{
        if(response.ok)
            return response.text()
        else
            throw new Error(response.status);
    })
    .then(data =>{
        //PARSEAMOS EL JSON EN UN OBJETO
        const iJs=JSON.parse(data);
        console.log(iJs)
        //RECORREMOS LAS PROPIEDADES DE LAS CLAVES DEL OBJETO
        for (var clave in iJs){
            //SI HAY PROPIEDAD EN ESA CLAVE, ENTRAMOS
            if (iJs.hasOwnProperty(clave)) {
              //ESCRIBIMOS HTML DE LAS CLAVES Y EL VALOR DE LAS CLAVES
              /* console.log("Clave: " + clave+ " - Valor: " + iJs[clave]); */
              if (document.querySelector(`.tx${clave}`)){
                document.querySelector(`.tx${clave}`).innerHTML=iJs[clave];
              }
            }
          }
        console.log("json de idioma establecido en: "+ idioma);
    })
    .catch(err =>{
        console.error("ERROR", err.message)        
    });
    //-------------------------------


    //CON SWITCH PARA CODE PEN-----------------
    class objIdioma{
        constructor(){
            this.t1="";
            this.t2="";
        }
        static getInstance(){
            return new objIdioma();
        }
    }

    const objIdio= objIdioma.getInstance();
    switch (idioma){
        case "en":            
            objIdio.t1="Hello, cat"
            objIdio.t2="We all adore the most perfect being in this world. It is a fact and there is no oooodiscussion."
            break
        case "es":
            objIdio.t1="Hola, gato"
            objIdio.t2="Todos adoramos al ser más perfecto de este mundo. Es un hecho y no hay discusión."          
            break;
        case "eu":
            objIdio.t1="Kaixo, katua"
            objIdio.t2="Denok maite dugu mundu honetako izakirik perfektuena. Gertaera bat da eta ez dago eztabaidarik."
            break;
        default:
    }

    document.querySelector('.txt1').innerHTML=objIdio.t1;
    document.querySelector('.txt2').innerHTML=objIdio.t2;

    //-------------------------------

}


//FUCIÓN PARA MOSTRAR EL MODAL DE ACEPTAR COOKIES
const ventanaCookies=()=>{
    let contentWindowCookies=`
    <div class="window">
    <div id="cookies">
        <div class='cookies-text'>
            <p>Utilizamos cookies propias y de terceros para mejorar nuestros servicios, elaborar información estadística, analizar sus hábitos de navegación e inferir grupos de interés. Esto nos permite personalizar el contenido que ofrecemos y mostrarle publicidad relacionada con sus preferencias. Adicionalmente, compartimos los análisis de navegación y los grupos de interés inferidos con terceros.</p>
        </div>
        <div  class='cookies-elements'>                
            <div class='cookies-botones'>                    
                <a id= 'cance' class='btn-cookies cance'>Denegar</a>
                <a id='acept' class='btn-cookies acep'>Aceptar</a>
            </div>
            <a href="">Configuración de las cookies</a>                
        </div>
        <span class='close'>X</span>
    </div>
 </div>
    `;
    //PINTAMOS EL HTML
    document.body.insertAdjacentHTML('afterbegin',contentWindowCookies);
    let $window_cookies=document.querySelector('.window');
    //ESCUCHAMOS EL CLICK
    document.addEventListener('click',(e)=>{
        //OBJETOS CON CLASE IGUAL A BTN
        if(e.target.matches('.btn-cookies') || e.target.matches('.close')){
            //SI ACEPTAN
            if(e.target.id==='acept'){
                console.log("acepta las cookies!")
                setCookie("aceptarCookies", "1", 90);
            }
            //SI NO ACEPTAN
            if(e.target.id==='cance'){
                console.log("deniega aceptar las cookies!")
            } 
            //QUITAMOS EL MODAL
            $window_cookies.remove();
            //QUITAMOS EL EVENTO LISTENER
            e.target.removeEventListener('click',e.preventDefault(),true);
        }
    },false);
}