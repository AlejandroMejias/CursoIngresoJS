/* al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA" */
function mostrar() {
  var saludo = prompt("Cuantas veces quieres que te salude?");
  for (let i = 1; i <= saludo; i++) {
    document.write(`Hola UTN FRA N°: ${i}<br>`);
  }
} //FIN DE LA FUNCIÓN
