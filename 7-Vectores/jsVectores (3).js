/* /* al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write(). */
function mostrar() {
  var seguir = true;
  var num;
  var ArrNumeros = [];
  for (let i = 0; seguir; i++) {
    num = prompt("Ingrese un numero para depositar en el array");
    ArrNumeros.push(num);
    seguir = confirm("Deseas continuar?");
  }
  document.write(`<h1>Array de numeros </h1>`);
  ArrNumeros.forEach((e) => {
    document.write(` ${e} `);
  });
} //FIN DE LA FUNCIÓN
