//Math

let decimal = 34.511111111111;

//Redondear números
console.log(Math.floor(decimal)); // abajo
console.log(Math.ceil(decimal)); // arriba
console.log(Math.round(decimal));
//>= 5 -> ceil | < 5 -> floor

//Máximo de una lista
console.log(Math.max(56.7, 100, 2000, 34, -500000));

//Mínimo de una lista
console.log(Math.min(56.7, 100, 2000, 34, -500000));

let numeroString = "67.8734";

let stringNumber = Number(numeroString);

//Convertir string a number entero
let numeroEntero = parseInt(numeroString);

//Convertir string a number decimal o float
let numeroDecimal = parseFloat(numeroString);

//Números con dos decimales
console.log(Math.round(numeroDecimal * 100) / 100);
let flotante = parseFloat(numeroDecimal.toFixed(2));

//Elevar un número a una potencia
let exponente = 3;
console.log(
  `El número ${numeroEntero} elevado a ${exponente} es de ${Math.pow(
    numeroEntero,
    exponente
  )}`
);

//Raiz cuadrada
console.log(parseFloat(Math.sqrt(flotante).toFixed(2)));

//Random 1 a 10
console.log(Math.ceil(Math.random() * 50));

//programa que reciba dos números y los multiplique entre si

//Ejercicio
/*Programa que reciba un número con más de 5 decimales y muestre en consola los siguientes datos:
1 - El número redondeado a su valor más bajo
2 - El número con dos decimales
3 - El número elevado al cubo
4 - La raiz cuadrada del número ingresado
5 - El resultado de multiplicar el número ingresado con un número aleatorio entre 1 y 9
*/

const NUMERO_INGRESADO = parseFloat(
  prompt("Ingrese un número decimal con un mínimo de 5 decimales")
);

//1
console.log(
  `El número redondeado a su valor más bajo es ${Math.floor(NUMERO_INGRESADO)}`
);

// 2 -
console.log(
  `El número con dos decimales es ${parseFloat(NUMERO_INGRESADO.toFixed(2))}`
);

// 3-
console.log(`El número elevado al cubo es ${Math.pow(NUMERO_INGRESADO, 3)}`);

// 4-
console.log(`La raiz cuadrada del número es ${Math.sqrt(NUMERO_INGRESADO)}`);

// 5-

//Obtener número aleatorio
let numeroRandom = Math.ceil(Math.random() * 9); //1

console.log(
  `${NUMERO_INGRESADO} x ${numeroRandom} = ${NUMERO_INGRESADO * numeroRandom}`
);

document.write(
  `${NUMERO_INGRESADO} x ${numeroRandom} = ${NUMERO_INGRESADO * numeroRandom}`
);
