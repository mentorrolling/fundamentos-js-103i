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
let indiceMayor50 = numeros.findIndex((num) => num > 10);

//reduce?

//forEach
alumnos.forEach((alumno, index) => console.log(`${index + 1} - ${alumno}`));
