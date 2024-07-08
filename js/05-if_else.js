//Condicionales

/*
Si la condición es verdadera entonces realiza una acción, sino realiza otra acción o no hace nada

if(condicion){
    acciones 
}else{
    acciones
}

*/

//Ingresar un número y mostrar en consola si es par

//dato de entrada: número
//proceso: divido en 2 el número y verifico el resto si es 0 es par
// dato de salida: mensaje si es par

// let numero = Number(prompt("Ingrese un número"));

// let proceso = numero % 2;

// console.log(!isNaN(proceso));

// if (!isNaN(proceso)) {
//   if (proceso === 0) {
//     console.log("El número es par", numero);
//   } else {
//     console.error("No es par el número", numero);
//   }
// } else {
//   console.error("No ingresó un número");
// }

//fiesta
//--------
//Solo puede entrar un mayor de edad osea mayor de 18
// si no es mayor de edad entonces debe ir acompañado de un tutor

//dato de entrada: edad, tutor
//proceso: si es mayor de 18 pasa a la fiesta, sino verifico que venga con un tutor para entrar a la fiesta. No entraría a la fiesta sin fallan las condiciones.
// dato de salida: Mensaje al usuario para que sepa si puede entrar o no a la fiesta.

let edad = 18;
let tutor = true;

// if (edad >= 18) {
//   console.log("Bienvenid@ a la fiesta!!!");
// } else if (tutor) {
//   console.log("Bienvenid@ a la fiesta, accede con tu tutor");
// } else {
//   console.error("No puede pasar a la fiesta, vaya a la casa");
// }

//REFACTOREO
if (edad >= 18 || tutor) {
  console.log("Bienvenid@ a la fiesta!!!");
} else {
  console.error("No puede pasar a la fiesta, vaya a la casa");
}
