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

//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/

//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y cacule su valor en pesos argentinos. Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar el cálculo.
*/

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

//Ejercicio 4
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."

Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra... aparece ... veces en el texto original'
*/

//Ejercicio 5
/*
Biblioteca
Diseña una función declarativa que reciba como parámetro un array y muestre la lista de sus elementos alfabéticamente y como si fuera una lista ordenada de html.
Declara un array de 10 elementos que contenga libros de cualquier categoría y úsalo como argumento de la función anterior.
Ejemplo de como debería verse en el navegador:
1 - Biografía de Stev Jobs
2 - Casa blanca
3 - ....
*/
