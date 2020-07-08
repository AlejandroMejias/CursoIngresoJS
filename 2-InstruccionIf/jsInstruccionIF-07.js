/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

function mostrar() {
  var edad = txtIdEdad.value;
  var EstadoCivil = estadoCivil.value;
  if (edad < 18 && EstadoCivil != "Soltero") {
    alert("Es muy pequeño para NO ser soltero!");
  }
} //FIN DE LA FUNCIÓN
