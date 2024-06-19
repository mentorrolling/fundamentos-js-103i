//Bucles o Ciclos
//Estructuras repetitivas

// while
//Mientras se cumple la condición haga una acción varias veces

let vueltas = 1;

while (vueltas <= 10) {
  //acciones
  console.log(vueltas);
  vueltas++; //vueltas = vueltas -1
}

// //calcular cualquier tabla
let tabla = parseInt(prompt("Ingrese la tabla a calcular"));
let valor = 1;

if (!isNaN(tabla)) {
  while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);

    valor++;
  }
} else {
  console.error("Debe ingresar un número entero");
}

// do while
//Mientras cumple la condición se repite
//por lo menos se va a ejecutar una vez

//Crear un pokedex
//Algoritmo:
//Datos de entrada: Nombre de un pokemon
// proceso: Almacenar el nombre y sumarlo a los que ya están guardados.
//Resultado: Mostrar la lista de pokemones almacenados

let pokemon = "";
let pokedex = "";

do {
  pokemon = prompt("Ingrese el nombre del Pokemon capturado");
  if (pokemon) {
    pokedex += pokemon + "<br>"; //pokedex = pokedex + pokemon
  }
} while (pokemon);

document.write(pokedex);

//Valores tipo false
// '' false
// 0 false
// null false
// NaN false

// for

//for
//3 parámetros
// 1 iterador;
// 2 condición;
// 3 el manejo del iterador

for (let i = 10; i >= 1; i--) {
  //acciones
  console.log(i);
}

for (let i = 1; i <= 10; i++) {
  console.log(`2 x ${i} = ${2 * i}`);
}

//trivia
/*
Adivinar la capital de un pais
tenemos 3 intentos
si acertamos se detiene el programa y mostramos un mensaje de GANADOR
Si terminan los 3 intentos y no respondemos bien PERDEMOS

*/

//algoritmo:
//Datos de entrada: capital
//procesos:verificar que ingrese una palabra, verificar si cancela, verificar si la respuesta es correcta o no, evaluar si tiene intentos.
// Salida: mensaje si respondió bien o no

const RESPUESTA_CORRECTA = "París";
let intentos = 3;
let respuestaUsuario = "";

do {
  respuestaUsuario = prompt("¿Cuál es la capital de Francia?");
  intentos--;

  if (respuestaUsuario !== null) {
    if (respuestaUsuario.toUpperCase() === RESPUESTA_CORRECTA.toUpperCase()) {
      console.log("GANASTE!!!");
      intentos = 0;
    } else if (intentos > 0) {
      alert("Respuesta incorrecta, vuelva a intentar");
    } else {
      console.warn("PERDISTE!!");
    }
  } else {
    intentos = 0;
  }
} while (intentos > 0);
