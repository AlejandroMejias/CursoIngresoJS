/* al seleccionar un mes informar.
si estamos en Invierno: "Abrigate que hace frio."
si aún no llego el Invierno: "Falta para el invierno."
si ya paso el Invierno: "Ya pasamos el frio, ahora calor!!!."
ACLARAcIÓN: tomamos a Julio y Agosto como los meses de Invierno. */

function mostrar() {
  var mesDelAnio = txtIdMes.value;
  switch (true) {
    case mesDelAnio == "Julio" || mesDelAnio == "Agosto":
      alert("Abrigate que hace frio!!");
      break;
    case mesDelAnio == "Marzo" || mesDelAnio == "Abril" || mesDelAnio == "Mayo" || mesDelAnio == "Junio":
      alert("Falta para el invierno!!");
      break;
    default:
      alert("Ya pasamos el frio!! Ahora viene el calor!!");
  }
} //FIN DE LA FUNCIÓN
