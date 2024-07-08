//Ejercicio 1
/*
Crea tres arrays de 5 números cada uno, luego escribe una función declarativa que reciba los tres arrays como parámetros y realice las siguientes tareas:
- Unir los tres arrays en un nuevo array llamado 'integrados' 
- Ordenar el array de menor a mayor
- Crear un nuevo array que contenga todos los números del array 'integrados' que sean menores de 60.
*/
const array1 = [52, 93, 15, 72, 61];
const array2 = [21, 83, 87, 75, 175];
const array3 = [88, 100, 24, 3, 22];

function trabajarConNumeros(a, b, c) {
  const integrados = a.concat(b, c);
  integrados.sort((num1, num2) => num1 - num2);
  let numMenor60 = integrados.filter((num) => num < 60);
  return numMenor60;
}

//Ejercicio 2
/*
Cotizadoción Dolar
Escribe una función de flecha que reciba como parámetro un valor en dolar y cacule su valor en pesos argentinos y lo retorne. Modifica dicha función para que se pueda enviar como parámetro también el valor del dolar oficial para realizar el cálculo.
*/

const cotizadorDollar = (valor, dolar = 892.57) => {
  let valorEnPeso = valor * dolar;
  return valorEnPeso;
};

//Ejercicio 3
/*
Escribe una función anónima que reciba una palabra o frase cómo parámetro y retorne cuantas vocales contiene.
*/

const contadorVocales = function (caracteres) {
  const vocales = ["a", "á", "e", "é", "i", "í", "o", "ó", "u", "ú"];
  return caracteres
    .split("")
    .filter((caracter) => vocales.includes(caracter.toLowerCase())).length;
};

contadorVocales("Cómo están señores del país");

//Ejercicio 4
/*
Dado el siguiente texto:
"Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.
Steve Wozniak, conocido cariñosamente como "Woz", era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.
Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora."

Crear una función anónima que reciba el texto como parámetro y retorne la cantidad de veces que aparece la palabra 'computadora' en el mismo.
Luego usar dicha función para devolver en el navegador un mensaje que diga 'La palabra computadora aparece ... veces en el texto original'
*/

let historia =
  "Érase una vez en el año 1976, en un pequeño garaje en Los Altos, California, donde dos jóvenes visionarios, Steve Jobs y Steve Wozniak, se unieron para cambiar el mundo de la tecnología para siempre. Estos dos amigos compartían una pasión por la electrónica y la informática, y estaban decididos a crear algo revolucionario.Steve Wozniak, conocido cariñosamente como 'Woz', era un genio autodidacta de la electrónica. Trabajaba en Hewlett-Packard, pero en su tiempo libre soñaba con construir una computadora personal. En ese entonces, las computadoras eran enormes, costosas y sólo accesibles para las grandes empresas y universidades. Pero Woz tenía una visión diferente: quería crear una computadora que cualquiera pudiera tener en su hogar.Steve Jobs, en cambio, era el visionario y el hombre de negocios. Reconoció el potencial del proyecto de Woz y se propuso hacerlo realidad. Pero había un problema: no tenían dinero para fabricar la computadora. Jobs vendió su furgoneta Volkswagen y Wozniak vendió su calculadora científica HP-65 para reunir fondos. Con este dinero, compraron los componentes necesarios para construir el primer prototipo de su computadora.";

const buscarComputadora = function (textos) {
  return textos
    .split(" ")
    .filter((texto) => texto.toLowerCase().includes("computadora")).length;
};

document.write(
  `La palabra 'computadora' o 'computadoras aparece ${buscarComputadora(
    historia
  )} veces`
);

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
const librosProgramacion = [
  "Clean Code in Python",
  "JavaScript: The New Toys",
  "Programming Rust: Fast, Safe Systems Development",
  "C# 9.0 in a Nutshell: The Definitive Reference",
  "Real-World Software Development",
  "Learning Python",
  "Kotlin in Action",
  "The Pragmatic Programmer: 20th Anniversary Edition",
  "Introduction to Machine Learning with Python",
  "Python Crash Course, 2nd Edition",
];

function listaDeLibros(array) {
  document.write("<h3>Lista de Libros</h3>");

  document.write("<ol>");
  array.sort().forEach((item) => {
    document.write(`<li>${item}</li>`);
    document.write("</li>");
  });
  document.write("</ol>");
}
