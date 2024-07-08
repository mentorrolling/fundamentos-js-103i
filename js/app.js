//DOM
//DOCUMENT OBJECT MODEL

//Obtener elementos
document.getElementById("primero");
document.getElementById("segundo");

document.getElementsByTagName("p"); //devuelve HTMLcollection
document.getElementsByClassName("parrafo"); //devuelve HTMLcollection

document.querySelector("#primero");
document.querySelector("p"); //primer párrafo
let parrafos = document.querySelectorAll("p"); //NodeList
parrafos.forEach((parrafo) => console.log(parrafo.innerText.toUpperCase()));
document.querySelector(".parrafo"); //primer párrafo

//crear un nodo
let contenedor = document.querySelector("main");

let imagen = document.createElement("img");
imagen.src =
  "https://th.bing.com/th/id/OIP.bck_XCKTzvl-CpQIncvB0QAAAA?rs=1&pid=ImgDetMain"; //<img />
imagen.alt = "This is fine";

imagen.classList = "img"; //aplicar clase de css

//agregarlo al contenedor
contenedor.append(imagen);
