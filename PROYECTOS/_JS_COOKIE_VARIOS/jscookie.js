/* copia de w3.school.com */

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

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
  
function recorrerCookie(){
  let resultado = '';
  let decodedCookie = decodeURIComponent(document.cookie);
  let arrayCookies;
  console.log('cookie ' + document.cookie);
  console.log('cookie decoded ' + decodedCookie);
  arrayCookies = decodedCookie.split(';');
  for (let item of arrayCookies){
    console.log('item cookie ', item);
    let parCookie=item.split("=" );
    console.log('name ' + parCookie[0] + 'valor ' + parCookie[1]);
    resultado += `<p class="resaltado">${parCookie[0]} = ${parCookie[1]}`;
  }
  return resultado;
}

  