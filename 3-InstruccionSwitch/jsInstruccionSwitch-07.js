/* Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
  var destinoIngresado;
  var mensaje;
  destinoIngresado = txtIdDestino.value;

  switch (destinoIngresado)
  {
    case "Cataratas":
      mensaje = `Las ${destinoIngresado} estan en el NORTE del país`;
      break;
    case "Mar del plata":
      mensaje = `${destinoIngresado} esta al ESTE del país`
      break;
    case "Bariloche":
      mensaje = `${destinoIngresado} esta al OESTE del país`
      break;
    default:
      mensaje = `${destinoIngresado} esta al SUR del país`
  }
  alert(mensaje);
} //FIN DE LA FUNCIÓN
