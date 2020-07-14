/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar() {
  var destinoIngresado;
  destinoIngresado = txtIdDestino.value;
  switch (destinoIngresado) {
    case "Cataratas":
      alert(`Las ${destinoIngresado} estan en el NORTE del país`);
      break;
    case "Mar del plata":
      alert(`${destinoIngresado} esta al ESTE del país`);
      break;
    case "Bariloche":
      alert(`${destinoIngresado} esta al OESTE del país`);
      break;
    default:
      alert(`${destinoIngresado} esta al SUR del país`);
  }
} //FIN DE LA FUNCIÓN
