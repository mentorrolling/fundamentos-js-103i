//String
let nombre = "Alfredo";
//0=>A, 1=>l,...
let apellido = "GONZALEZ";
let frase = "     Bienvenidos a la clase       ";

//Concatenación
console.log(nombre, apellido);
console.log(nombre + " " + apellido);

//template string
console.log(`Mi nombre completo es ${nombre} ${apellido}`);
//alt + }
console.log(`La frase del día es: ${frase}`);

//cantidad de caracteres
console.log(`El apellido tiene ${apellido.length} caracteres`);

//MAYÚSCULAS
console.log(nombre.toUpperCase());
//minúsculas
console.log(apellido.toLowerCase());

//Quitar espacios delante y detras
let fraseSinEspacio = frase.trim();

//Si quiero eliminar todos los espacios

//array [elemento1, elemento2, elemento3]
// console.log(frase.split(" "));
// let sinEspacio = frase.trim().split(" ");
// console.log(sinEspacio.join(""));

console.log(frase.trim().split(" ").join(""));

//Obtener uno o varios caracteres
console.log(nombre.at(0));
console.log(apellido.at(-1));

console.log(apellido.substring(1, 4));

//Guardar datos en una variable ingresados desde el navegador
let nombrecito = prompt("Ingrese su nombre");

// Tarea 1
// ------------
// 1 - ingreso el apellido
// 2 - calcular cantidad de caracteres
// 3 - obtener la última letra del apellido

// Tarea 2
// ------------
// Dada la siguiente palabra "marmota"
// 1 - Pasarla a mayuscula
let animal = "marmota";
console.log(animal.toUpperCase());
// 2 - Capitalizar la palabra (Marmota)

// let primeraLetra = animal.at(0).toUpperCase();
// let restoPalabra = animal.substring(1);
// console.log(`${primeraLetra}${restoPalabra}`);
console.log(animal.at(0).toUpperCase() + animal.substring(1));
