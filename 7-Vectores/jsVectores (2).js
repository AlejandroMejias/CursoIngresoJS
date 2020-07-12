/*al presionar el botón se mostrará 5 nombres
que estaran contenidos en un vector. */

function mostrar() {
  var nombres = ["Alejandro", "Miguel", "Juan", "Maria", "Lucia"];
  for (let i = 0; i < nombres.length; i++) {
    document.write(`${nombres[i]}, ---> posicion ${i}° dentro del array <br>`);
  }
} //FIN DE LA FUNCIÓN
