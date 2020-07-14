/* al presionar el botón pedir un número. mostrar los numeros pares desde el 1 al número ingresado, y mostrar la cantidad de numeros pares encontrados. */

function mostrar() {
  var num;
  var CantidadPares = 0;

  num = prompt("Ingrese un numero");
  
  for (let i = 1; i <= num; i++) {
    /* Imprimimos los numeros pares */
    if (i % 2 == 0) {
      document.write(`<strong>${i}</strong> es par <br>`);
      CantidadPares++;
    }
  }
  document.write(`Entre 1 y ${num} existen <strong>${CantidadPares}</strong> numeros pares`);
} //FIN DE LA FUNCIÓN
