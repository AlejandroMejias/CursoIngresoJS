/* al presionar el botón mostrará 10 números
que estaran contenidos en un vector. */
function mostrar() {
  var numeros;
  numeros = [1, 6, 10, 20, 15, 22, 60, 88, 99, 55];
  
  numeros.forEach((value , index)=> {
	document.write(`${value} , corresponde a la posicion ${index} del array <br>`);
  });
} //FIN DE LA FUNCIÓN
