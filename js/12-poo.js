//Clases POO  OOP
//molde con el cual vamos a crear objetos
//Cada objeto creado con una clase se llama instancia

// batman={
//   nombre,
//   alias,
//   grupo,
//   poder
// }

class Superheroe {
  constructor(nombre, alias, grupo, poder) {
    this.nombre = nombre;
    this.alias = alias;
    this.grupo = grupo;
    this.poder = poder;
  }
  tarjetaPresentacion() {
    console.log("Tarjeta de presentación");
    console.log("-----------------------");
    console.log(`Nombre: ${this.nombre}`);
    console.log(`Alias: ${this.alias}`);
    console.log(`Equipo: ${this.grupo}`);
    console.log(`Poder: ${this.poder}`);
  }

  cambiarNombre(valor) {
    this.nombre = valor;
  }
}

let batman = new Superheroe(
  "Bruce Wayne",
  "Batman",
  "Liga de la justicia",
  250
);

let spiderman = new Superheroe("Peter Parker", "Spiderman", "Avengers", 550);

// Ejercicio 1
/*Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área*/

class Rectangulo {
  constructor(alto, ancho) {
    this.alto = alto;
    this.ancho = ancho;
  }
  set modificarAlto(valor) {
    this.alto = valor;
  }
  set modificarAncho(valor) {
    this.ancho = valor;
  }

  get calcularPerimetro() {
    return 2 * (this.alto + this.ancho);
  }
  get calcularArea() {
    return this.alto * this.ancho;
  }
}

const rect1 = new Rectangulo(30, 65);
const rect2 = new Rectangulo(10, 34);

//setter y getter

/*Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
  Una propiedad titular con el valor "Alex".
  Una propiedad saldo, teniendo como valor inicial 0.
  Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
  Un método extraer() que permita retirar la cantidad pasada como parámetro.
  Un método informar() que retorne la información del estado de la cuenta. 
  
  Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.*/

class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }

  ingresar(valor) {
    if (valor > 0 && !isNaN(valor)) {
      this.saldo += valor;
      this.informar();
    } else {
      console.warn("El valor ingresado es incorrecto");
    }
  }
  extraer(valor) {
    if (valor > 0 && !isNaN(valor)) {
      if (valor <= this.saldo) {
        this.saldo -= valor;
      } else {
        console.warn("Saldo insuficiente");
      }
      this.informar();
    } else {
      console.warn("El valor ingresado es incorrecto");
    }
  }
  informar() {
    console.log(`El saldo de la cuenta es $${this.saldo}`);
  }
}

let alex = new Cuenta("Alex");
let co8967 = new Cuenta("Leo", 300000);
