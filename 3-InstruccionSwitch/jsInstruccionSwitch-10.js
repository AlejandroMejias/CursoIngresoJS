/* una agencia de viajes nos piden informar si hacemos viajes a lugares según la estación del año estemos, informar si "Se viaja" o "No se viaja" a ese lugar

en Invierno: Solo Bariloche informa "se viaja" los demas destinos "No se viaja"

en Verano: Se viaja a Mar del plata y Cataratas solamente

en Otoño: Se viaja a todos los destinos.

primavera: solo no se viaja a Bariloche */

function mostrar() {
  var estacionIngresada;
  var destino;
  estacionIngresada = txtIdEstacion.value;
  destino = txtIdDestino.value;
  switch (estacionIngresada) {
    case "Invierno":
      if (destino == "Bariloche") {
        alert(`A ${destino} se viaja!!`);
      } else {
        alert(`Lo lamento, no es posible viajar a ${destino} en estos momentos`);
      }
      break;
    case "Verano":
      if (destino == "Mar del plata" || destino == "Cataratas") {
        alert(`A ${destino} se viaja!!!`);
      } else {
        alert(`Lo lamento, no es posible viajar a ${destino} en estos momentos`);
	  }
	  break;
    case "Primavera":
      if (destino != "Bariloche") {
        alert(`A ${destino} se viaja!!`);
      } else {
        alert(`Lo lamento, no es posible viajar a ${destino} en estos momentos`);
      }
      break;
    default:
      alert(`Se puede viajar a ${destino} en ${estacionIngresada}`);
  }
} //FIN DE LA FUNCIÓN
