/* al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días. */
function mostrar() {
  var mesDelAnio;
  mesDelAnio = txtIdMes.value;
  switch (true) {
    case mesDelAnio == "Febrero":
      alert("Tiene 28 días");
      break;
    case mesDelAnio == "Abril" || mesDelAnio == "Junio" || mesDelAnio == "Septiembre" || mesDelAnio == "Noviembre":
      alert("Tiene 30 días");
      break;
    default:
      alert("Tiene 31 días");
  }
} //FIN DE LA FUNCIÓN
