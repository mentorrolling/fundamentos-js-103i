//Funciones o métodos
//Código encapsulado que podemos ejecutar cuando sea necesario.

// alert("Hola mundo!");
// prompt("Ingrese sus sueños y hágalos realidad");
// let validación = confirm("Soy feo?");

//Funciones declarativas
//Se declaran con la palabra reservada 'function' y un nombre

function saludarPersona() {
  //acciones
  //procesos
  let nombre = prompt("Ingrese su nombre");
  console.log(`Bienvenid@ ${nombre} al curso de javascript`);
}

// saludarPersona()

//Funciones anónimas o de expresión
//Se declaran como variables constantes y se le asigna una función sin nombre

const palabraAlReves = function () {
  let palabra = prompt("Ingrese la palabra");
  let invertida = palabra.split("").reverse().join("");

  console.log(invertida);
};

//Parámetros son datos que recibe una función entre los paréntesis y que se usan en los procesos. Al momento de ejecutarla le envío argumentos a la función en representación de los parámetros.

function suma(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
}

suma(23, 45);

//Ejercicio 2
function capitalizarNombre(nombre, apellido) {
  let nombreCapitalizado = nombre.at(0).toUpperCase() + nombre.substr(1);
  //pablo
  //P
  //ablo
  //Pablo

  let apellidoCapitalizado = apellido.at(0).toUpperCase() + apellido.substr(1);

  console.log(nombreCapitalizado + " " + apellidoCapitalizado);
}

// capitalizarNombre("alfredo", "gonzalez");

let nombres = "pablo daniel eusebio".split(" "); //3 nombres Pablo Daniel Eusebio

function capitalizarPalabra(palabra) {
  let palabraCapitalizada = palabra.at(0).toUpperCase() + palabra.substr(1);

  console.log(palabraCapitalizada);
}

for (let i = 0; i < nombres.length; i++) {
  capitalizarPalabra(nombres[i]);
}

let cosa = "queso";
capitalizarPalabra(cosa);

//Parámetros por defecto
const sumaDefault = function (num1 = 0, num2 = 0) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

function saludarPersonaDefault(nombre = "Invitado") {
  //acciones
  //procesos

  console.log(`Bienvenid@ ${nombre} al curso de javascript`);
}
