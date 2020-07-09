/* Al seleccionar un destino informar si hace FRIO o CALOR en ese destino */

function mostrar() {
  var destinoIngresado = txtIdDestino.value;
  switch (destinoIngresado) {
    case "Cataratas":
      alert("Aquí hace calor todo el año");
      break;
    case "Mar del plata":
      alert("En esta epoca del año hace frio!!");
      break;
    default:
      alert("Hace frio!!!");
  }
} //FIN DE LA FUNCIÓN
