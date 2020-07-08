/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar() {
  var nota = Math.floor(Math.random() * 10 + 1);
  if (nota >= 9) {
    alert("EXCELENTE CALIFICACION!!!");
  } else if (nota < 4) {
    alert("VAMOS!! La próxima se puede!!");
  } else {
    alert("Felicitaciones , aprobaste!!!");
  }
} //FIN DE LA FUNCIÓN
