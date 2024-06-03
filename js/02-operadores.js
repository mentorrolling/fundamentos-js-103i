//operadores

//Aritméticos
let numero1 = 34;
let numero2 = 2;
let numeroString = "34";

//suma
console.log(numero1 + numero2);
//resta
console.log(numero1 - numero2);
//multiplicación
console.log(numero1 * numero2);
//división
console.log(numero1 / numero2);
//resto
console.log(numero1 % numero2); //

//Unitarios
// numero1++; //numero1 = numero1 + 1
// numero2--; //numero2 = numero2 - 1

//Relacionales
//igualdad
console.log(numero1 == numeroString); //iguala el valor
console.log(numero1 === numeroString); //iguala el tipo y valor
//mayor
console.log(numero1 > numero2);
//menor
console.log(numero1 < numero2);
//mayor o igual
console.log(numero1 >= numero2);
//menor o igual
console.log(numero1 <= numero2);
//distinto de
console.log(numero1 != numero2);

//Negación
let esUnaBuenaClase = false;
console.log(!esUnaBuenaClase);

//logicos
//AND = &&
//OR = ||
let estudio = true;
let practico = false;

console.log(estudio && practico); //false
console.log(estudio || practico); //true
