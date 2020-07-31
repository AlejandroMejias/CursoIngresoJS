/* al seleccionar un mes informar.
si es Enero: "que comiences bien el año!!!."
si es Marzo: "a clases!!!."
si es Julio: "se vienen las vacaciones!!!."
si es Diciembre: "Felices fiesta!!!." */

function mostrar()
{
  var mesDelAnio;
  mesDelAnio = txtIdMes.value;

  switch (mesDelAnio)
  {
    case "Enero":
      alert("Que comiences bien el año!!");
      break;
    case "Marzo":
      alert("Es hora de ir a clases!!!");
      break;
    case "Julio":
      alert("Se vienen las vacaciones");
      break;
    case "Diciembre":
      alert("Felices fiestas!!!");
  }
} //FIN DE LA FUNCIÓN
