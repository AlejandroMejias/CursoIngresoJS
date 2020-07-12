/* l presionar el botón pedir un número. mostrar los numeros divisores desde el 1 al número ingresado, y mostrar la cantidad de numeros divisores encontrados. */

function mostrar() {
  var num;
  var cantidadDivisores = 0;
  num = prompt("Ingrese un numero");
  for (let i = 1; i <= num; i++) {
    /* Buscamos los numeros divisores  */
    if (num % i == 0) {
      document.write(`${num} es divisible por ${i} <br>`);
      cantidadDivisores++;
    }
  }
  document.write(`Cantidad de divisores encontrada: ${cantidadDivisores}`);
} //FIN DE LA FUNCIÓN
