/* al seleccionar un mes informar.
si es Febrero: " Este mes no tiene más de 29 días."
si NO es Febrero: "Este mes tiene 30 o más días" */

function mostrar() {
  var mesDelAnio = txtIdMes.value;
  switch (mesDelAnio) {
    case "Febrero":
      alert("Este mes no tiene más de 29 días");
      break;
    default:
      alert("Este mes tiene 30 días o más días");
  }
} //FIN DE LA FUNCIÓN
