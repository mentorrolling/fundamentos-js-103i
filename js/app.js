//Bucles o Ciclos
//Estructuras repetitivas

// while
//Mientras se cumple la condición haga una acción varias veces

let vueltas = 1;

while (vueltas <= 10) {
  //acciones
  console.log(vueltas);
  vueltas++; //vueltas = vueltas -1
}

//calcular cualquier tabla
let tabla = parseInt(prompt("Ingrese la tabla a calcular"));
let valor = 1;

if (!isNaN(tabla)) {
  while (valor <= 10) {
    console.log(`${tabla} x ${valor} = ${tabla * valor}`);

    valor++;
  }
} else {
  console.error("Debe ingresar un número entero");
}

// do while
//Mientras cumple la condición se repite
//por lo menos se va a ejecutar una vez

//Crear un pokedex
//Algoritmo:
//Datos de entrada: Nombre de un pokemon
// proceso: Almacenar el nombre y sumarlo a los que ya están guardados.
//Resultado: Mostrar la lista de pokemones almacenados

let pokemon = "";
let pokedex = "";

do {
  pokemon = prompt("Ingrese el nombre del Pokemon capturado");
  if (pokemon) {
    pokedex += pokemon + "<br>"; //pokedex = pokedex + pokemon
  }
} while (pokemon);

document.write(pokedex);
/*
  '' false
  0 false
  null false
  NaN false
  */

// for
