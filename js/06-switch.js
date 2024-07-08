//Switch

//condicional múltiple

let numero = 110;
switch (numero) {
  case 10:
    console.log("El número es 10");
    break;
  case 20:
    console.log("El número es 20");
    break;
  case 50:
    console.log("El número es 50");
    break;
  default:
    //acciones
    console.log("No coincide con ninguna opción");

    break;
}

let dia = new Date().getDay();

switch (dia) {
  case 0:
    console.log("Hoy es Domingo 🤩");
    break;
  case 1:
    console.log("Hoy es Lunes 😴");
    break;
  case 2:
    console.log("Hoy es Martes 🙄");
    break;
  case 3:
    console.log("Hoy es Miércoles 🙂");
    break;
  case 4:
    console.log("Hoy es Jueves 🤓");
    break;
  case 5:
    console.log("Hoy es Viernes 😉");
    break;

  default:
    console.log("Hoy es Sábado 😎");
    break;
}

/*
Un comerciante hace descuentos a sus clientes de la siguiente forma:
Si ha comprado menos de 100 euros no hay descuento
Si la compra está entre 100 y 300 euros le descuenta un 5%
Si la compra está por encima de 300 hasta 500 euros le descuenta un 10%
Si la compra supera los 500 euros le descuenta un 15%
*/

let monto = 400;

switch (true) {
  case monto < 100: //verdadero
    console.log("No tenés descuento, sorry");
    break;
  case monto <= 300:
    console.log("descuenta un 5%");
    break;
  case monto <= 500:
    console.log("descuenta un 10%");
    break;
  default:
    console.log("descuenta un 15%");
    break;
}

//Calculadora simple

//Algoritmo----------------------------
//datos de entrada: dos números y una operación a realizar
// proceso: Ingreso los números, elijo operación, y ejecuto operación con los dos números.
// Resultado: Mostrar resultado de la operación en consola y pantalla.
//-------------------------------------

let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
let operacion = null;

if (isNaN(num1) || isNaN(num2)) {
  alert("Alguno de los valores ingresados no es un número");
} else {
  operacion = prompt(
    "Ingrese una de las siguientes operaciones\n- suma\n- resta\n- multiplicación\n- división"
  );

  if (operacion === "" || operacion === null) {
    console.error("Debe ingresar una operación válida");
  } else {
    switch (operacion.toLowerCase()) {
      case "suma":
        console.log(`${num1} + ${num2} = ${num1 + num2}`);
        document.write(`${num1} + ${num2} = ${num1 + num2}`);
        break;
      case "resta":
        console.log(`${num1} - ${num2} = ${num1 - num2}`);
        document.write(`${num1} - ${num2} = ${num1 - num2}`);
        break;
      case "multiplicación":
        console.log(`${num1} x ${num2} = ${num1 * num2}`);
        document.write(`${num1} x ${num2} = ${num1 * num2}`);
        break;
      case "división":
        console.log(`${num1} ÷ ${num2} = ${num1 / num2}`);
        document.write(`${num1} ÷ ${num2} = ${num1 / num2}`);
        break;

      default:
        console.error("No se ingreso un operador valido");
        break;
    }
  }
}
