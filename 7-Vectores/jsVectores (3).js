/* /* al presionar el botón se pedira, a traves de prompt, y numeros
que seran guardados en un vector y luego serán mostrados mediante
document.write(). */
function mostrar() {
  var ArrNumeros = [];
  var seguir;
  var num;
  seguir = true;

  for (let i = 0; seguir; i++) {
    num = prompt("Ingrese un numero para depositar en el array");
    ArrNumeros.push(num);
    seguir = confirm("Deseas continuar?");
  }
  document.write(`<h1>Array de numeros </h1>`);
  ArrNumeros.forEach((value) => {
    document.write(` ${value} `);
  });
} //FIN DE LA FUNCIÓN
