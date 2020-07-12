/* al presionar el botón repetir el pedido de número hasta que ingresemos el 9. */
function mostrar() {
  var numero;
  numero = prompt("Ingrese el numero 9");
  for (; numero != 9; ) {
    numero = prompt("ERROR! Ingrese el numero 9 para continuar");
  }
  alert("Bienvenido");
} //FIN DE LA FUNCIÓN
