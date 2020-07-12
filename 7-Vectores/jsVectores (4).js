/* al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego seran mostrados mediante
document.write(). mostrar ademas la sumatoria de todos los numeros. */
function mostrar() {
  var Numeros = [];
  var ingreso;
  var seguir = true;
  var suma = 0;

  for (; seguir; ) {
    ingreso = parseInt(prompt("Ingrese un numero "));
    Numeros.push(ingreso);
    seguir = confirm("Deseas continuar?");
  }
  document.write(`<h1> Array de numeros: </h1>`);
  Numeros.forEach((e) => {
    document.write(`<strong> ${e} </strong>`);
    suma += e;
  });
  document.write(`<br> La sumatoria da como resultado ${suma}`);
} //FIN DE LA FUNCIÓN
