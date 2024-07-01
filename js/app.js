//Objetos
let auto1 = {
  //clave : valor
  marca: "Toyota",
  modelo: "Corolla",
  anio: 2020,
  color: "Rojo",
  encender: function () {
    console.log("El auto está encendido");
  },
  apagar: function () {
    console.log("El auto está apagado");
  },
};

//Obtener valores
auto1.modelo;
auto1["color"];
auto1.apagar();

//Agregar propiedades
auto1.puertas = 3;
auto1.concesionario = "";

//modificar un valor
auto1.color = "Gris";
auto1["anio"] = 2021;

//borrar una propiedad
delete auto1.concesionario;

//Iterar un objeto

// for (const prop in auto1) {
//   // console.log(typeof prop);
//   // auto1.prop
//   // console.log(prop);
//   if (typeof auto1[prop] !== "function") {
//     console.log(`${prop}: ${auto1[prop]}`);
//   }
// }

//Array de objetos
let peliculas = [
  {
    id: 1,
    titulo: "El Padrino",
    director: "Francis Ford Coppola",
    anio: 1972,
    genero: "Drama/Crimen",
    duracion: 175,
    calificacion: 9.2,
  },
  {
    id: 2,
    titulo: "El Caballero de la Noche",
    director: "Christopher Nolan",
    anio: 2008,
    genero: "Acción/Crimen",
    duracion: 152,
    calificacion: 9.0,
  },
  {
    id: 3,
    titulo: "Pulp Fiction",
    director: "Quentin Tarantino",
    anio: 1994,
    genero: "Drama/Crimen",
    duracion: 154,
    calificacion: 8.9,
  },
  {
    id: 4,
    titulo: "La Lista de Schindler",
    director: "Steven Spielberg",
    anio: 1993,
    genero: "Drama/Historia",
    duracion: 195,
    calificacion: 8.9,
  },
];

//for of
for (const pelicula of peliculas) {
  console.log("------" + pelicula.titulo + "------");
  console.log("Director: " + pelicula.director);
  console.log("Género: " + pelicula.genero);
}

peliculas.forEach((pelicula) => {
  console.log("------" + pelicula.titulo + "------");
  console.log("Director: " + pelicula.director);
  console.log("Género: " + pelicula.genero);
});

//Agregar una pelicula nueva

//Buscar película por genero

//ordenar las películas por calificacion
const ordenarPorCalificacion = () => {
  //Ordenar objetos en un array

  peliculas.forEach((pelicula) =>
    document.write(
      `Título: ${pelicula.titulo} - ${pelicula.calificacion}⭐<br>`
    )
  );
};

//borrar películas
