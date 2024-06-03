//variables
// var nombreCompleto = 'Joaquin Perez'

let alumna22 = "Josefina";
const PRIMER_DIA_SEMANA = "Lunes";
let $cosita = "";
// let class = 'Pepito' NO VA
$cosita;
PRIMER_DIA_SEMANA;
//que el nombre de las variables sea lo más descriptivo posible.
let marcaDelVehiculo = "Ford";

let alumnita = "Pepa";

//nombre de variables
// - letras mayúsculas y minúsculas del alfabeto Inglés
// - números del 0 al 9
// - signos '$' y '_'

//No debemos usar
// No podemos iniciar el nombre con números
//no puedo usar palabras reservadas

//Tipos de datos

//Number
let numeroPositivo = 34;
let numeroNegativo = -900;
let numeroDecimal = 89.7;

//String (texto)
let academia = "Rolling Code";
let numeroString = "22";
let stringVacio = "";

//Boolean
let comprar = true; //1
let comerEnCasa = false; //0

//undefined
let cosita;
console.log(cosita);

//Null (vacio)
let billeteraDePablo = null;

//NaN (not a number)
console.log(numeroPositivo);
console.log(numeroPositivo + comprar);

//array (arreglos) matrices
let alumnos = ["JImena", "Luciano", "Pabo", "Leo"];
let numeros = [12, 78, 900, 3450, -22, 67.9];
let cualquierCosa = ["Hola", 878, true, [1, 2, 3, 4]];

//Object (Objetos)
let ironman = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 50,
  domicilio: "Torre Avengers",
};

/*
Datos primitivos (se almacenan directamente en la memoria)

Number: Números enteros o decimales.
String: Cadenas de texto.
Boolean: Valores lógicos (true o false).
Undefined: Indica la ausencia de un valor.
Null: Representa un valor intencionalmente vacío.
NaN: Not a Number

Datos no primitivos (se almacenan en referencias en la memoria)

Object: Colecciones de pares clave-valor.
Array: Listas ordenadas de valores.
Function: Bloques de código reutilizables.
Date: Representaciones de fechas y horas.
RegExp: Expresiones regulares para buscar patrones en cadenas.
Error: Representaciones de errores y excepciones.
 */

/*Ejercicios

1 - Siguiendo buenas prácticas que palabra/s reservada/s de javascript debemos usar para declarar variables. 

2 - Declarar e inicializar una variable de tipo String, una de tipo booleana y dos de tipo number.

3 - ¿Con qué  convención de nomenclatura está escrito el nombre de la siguente variable (pascal case, camel case o snake case)?

let cantidadDeAlumnos=45 camelCase

4 - Qué tipo de datos tienen almacenados las siguientes variables?

 - const MASCOTAS=['Boby','Chatran','Scooby']
 - let comisionActiva
 - let estaInactiva= false

5 - ¿Cómo puedo saber que tipo de datos tiene una variable desde la consola?. 

*/

//1 -
// let
// const

//2
let nombre = "Luciana";
let pabloConBarba = true;
let resultadoSuma = 5;
let resultadoResta = 3;

//3
//camelCase
let CantidadDeAlumnos = 45; //PascalCase
let cantidadDeAlumnos = 45; //camelCase
let CANTIDAD_DE_ALUMNOS = 45; //SNAKE_CASE

//4
const MASCOTAS = ["Boby", "Chatran", "Scooby"]; //array
let comisionActiva; //undefined
let estaInactiva = false; //boolean

//5
typeof MASCOTAS;
