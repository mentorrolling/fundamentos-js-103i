//Arrays
//arreglos

let alumnos = [
  "Pablo",
  "José",
  "Olga",
  "Ana",
  "Ludovica",
  "Fabrizio",
  "Gerónimo",
];

//ver un elemento
console.log(alumnos[3]);

//cantidad de elementos
console.log(alumnos.length);

//Como acceder al último elemento
console.log(alumnos[alumnos.length - 1]);
console.log(alumnos.at(-1));

//concatenar
let alumnosPresentes = ["Josefina", "Lucho", "Ana", "Miriam", "Pedro"];
let alumnosAusentes = ["Pablo", "Leo", "Penélope"];

let comision = alumnosAusentes.concat(alumnosPresentes);

//Iterar los arreglos
for (let i = 0; i < comision.length; i++) {
  console.log(`Bienvenid@ ${comision[i]}`);
}

//agregar elementos
comision.push("Dora"); // agregar al final
comision.unshift("Alberto", "Fernando"); //agregar al inicio

//Eliminar Elementos
comision.pop(); //elimino elemento al final
comision.shift(); //Elimina un elemento del inicio

//Obtener la posición de un elemento
console.log(comision.indexOf("Penélope"));

//Existe el elemento?
console.log(comision.includes("Ana"));

//Eliminar un elemento por su posición
comision.splice(3, 1); //borra elementos desde una posicion determinada

//Agregar elementos desde una posición
comision.splice(4, 0, "Gustavo", "Rosa");

//Reemplazar elementos
comision.splice(6, 2, "Luis", "Analia");

//Concatenar arreglo con String
console.log(`Los alumnos de la comisión son: ${comision}`);

console.log("Los alumnos de la comisión son:" + comision);

console.log("Los alumnos de la comisión son:".concat(comision));

console.log("Los alumnos de la comisión son:", comision);

//Ordenar alfabéticamente
let comisionAZ = comision.sort();

//Revertir arreglo
let comisionZA = comisionAZ.reverse();

//Asignar un arreglo a otro
let frameworksOne = ["1,3,4,5"];
let frameworks = frameworksOne; //MAL
// copiamos la referencia en memoria

// Extraer un nuevo arreglo
let comisionNueva = comision.slice(3, 6);

// Enigma Universal
console.log(["🥚", "🐔"].sort());

/*
Dado un array de números crear un programa que pida al usuario ingresar un número y verificar si existe en el arreglo. Si es así dar un mensaje como el siguiente "Adivinaste el número"
*/

//Algoritmo
//Datos de entrada: array de números, número del usuario
//Procesos: crear el array de números, solicitar el número al usuario, verificar si el número ingresado existe en el array.
//Salida: Mensaje de respuesta si adivinó

let numbers = [23, 678, 33, 23, 45, 6667, 90];

let numberUser = Number(prompt("Ingrese un número"));

if (isNaN(numberUser)) {
  console.error("No ingresó un número");
} else {
  if (numbers.includes(numberUser)) {
    console.log("Adivinaste el número");
  } else {
    console.warn("El número no existe en el arreglo");
  }
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] === numberUser) {
  //     console.log("Adivinaste el número");

  //   } else {
  //     console.warn("El número no existe en el arreglo");
  //   }
  // }
}
