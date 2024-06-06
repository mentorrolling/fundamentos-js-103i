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
