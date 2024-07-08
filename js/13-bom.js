//LOCATION
location.assign("https://rollingcodeschool.com");

location.replace("https://rollingcodeschool.com");

location.reload(); //recarga la página

location.href = "https://google.com";

//NAVIGATOR-------------------------------------------------

console.log(navigator.online);

//ubicación
function miUbicación() {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      let latitud = coords.latitude;
      let longitud = coords.longitude;
      console.log({ latitud, longitud });
    });
  } else {
    console.warn("La geolocalización no está disponible");
  }
}
//---------------------------------------------------------
//History
console.log(history.length); //cantidad de elementos en el historial
history.go(1); //adelante 1
history.back(); //atras

//Funciones de tiempo

//setInterval milisegundos 1000 => 1 segundo
//ejecuta la accion cada cierto tiempo

// setInterval(() => {

//     //acciones

// }, interval);

let reloj = null;
const relojEnPantalla = () => {
  let hora = "";
  let minutos = "";
  let segundos = "";

  reloj = setInterval(() => {
    document.body.innerHTML = "";
    hora = new Date().getHours();
    minutos = new Date().getMinutes();
    segundos = new Date().getSeconds();

    document.write(`${hora}:${minutos}:${segundos}`);
  }, 1000);
};

const detenerRelojEnPantalla = () => {
  clearInterval(reloj);
};

//setTimeout milisegundos 1000 => 1 segundo
//Ejecutar por única vez la acción después de cierto tiempo
/*
  setTimeout(() => {
        
    }, timeout);
*/

const redireccionarPagina = () => {
  document.write("<h3>Redireccionando a la página, espere por favor...</h3>");
  setTimeout(() => {
    location.assign("https://rollingcodeschool.com");
  }, 3000);
};
