//Callbacks

/*
Son funciones que se pasan como argumentos de otra función 

*/

const cubo = function (num) {
  return Math.pow(num, 3);
};

function calculadoraBasica(num1, num2, action) {
  switch (action) {
    case "suma":
      return `${num1} + ${num2} = ${num1 + num2}`;
    case "resta":
      return `${num1} - ${num2} = ${num1 - num2}`;
    case "multiplicar":
      return `${num1} x ${num2} = ${num1 * num2}`;
    case "division":
      return `${num1} / ${num2} = ${num1 / num2}`;
    case "cubo":
      return `Cubo de num1 = ${cubo(num1)} | Cubo de num2 = ${cubo(num2)}`;
    default:
      return "La acción no es válida";
  }
}

//sort
const numeros = [37, 11, 2, 15, 56, 52, 8, 48, 100];

numeros.sort((ant, sig) => ant - sig);

//Filter
//Retorna un nuevo arreglo con los elementos que cumplen una condición
let pares = numeros.filter(function (numero) {
  return numero % 2 === 0;
});
let mayor50 = numeros.filter((num) => num > 50);

// Find
//Devuelve el primer elemento que coincida con la condición
let alumnos = ["Jimena", "Romina", "Alfredo", "Gabriela", "Alfredo"];

let resultadoBusqueda = alumnos.find((alumno) => alumno === "Alfredo");

// const buscarAlumno = (user = prompt("Ingrese el nombre")) => {
//   return alumnos.find((alumno) => alumno === user);
// };

// let encontrado = buscarAlumno();

//FindIndex
//Devuelve la posicion del elemento que cumple la condición
let indice = alumnos.findIndex((alumno) => alumno === "Gabriela");
// alumnos.indexOf("Gabriela");
let indiceMayor10 = numeros.findIndex((num) => num > 10);

//forEach
alumnos.forEach((alumno, index) => console.log(`${index} - ${alumno}`));

//map
//Recorre el arreglo y devuelve un nuevo arreglo

let numerosDobles = numeros.map((num) => num * 2);
let nombresMayus = alumnos.map((alumno) => alumno.toUpperCase());

// let nuevo = alumnos.slice(0);
// nuevo.forEach((nombre)=>nombre.toUpperCase())

//reduce
//Toma los elementos del array y los reduce a un solo valor
const sumaArray = numeros.reduce((acum, num) => acum + num);

let valores = [
  [34, 67],
  [56, 89, 70],
  [999, 1000, 500],
];

let integrados = valores.reduce((acum, valor) => acum.concat(valor));
integrados.reduce((acum, num) => acum + num);

let newArray = [];
valores.forEach((array) => {
  for (let index = 1; index < array.length; index++) {
    console.log(array[index]);
  }
  newArray = newArray.concat(array);
});

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase como parámetro y retorne cuantas vocales contiene.
*/
//Algoritmo
//datos de entrada: caracteres (frase, palabra)
// procesos: identificar las vocales y sumarlas
//Salida: es la cantidad de vocales

("Hola pepe");
const contadorVocales = function (caracteres) {
  const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];

  let arrayCaracteres = caracteres.split("");
  return arrayCaracteres.filter((caracter) =>
    vocales.includes(caracter.toLowerCase())
  ).length;

  // return caracteres.split("").filter((caracter) => vocales.includes(caracter))
  //   .length;
};

let cantidadDeVocales = contadorVocales("Hola pepe");
let cantidadDeVocales2 = contadorVocales("Cómo estás?");
