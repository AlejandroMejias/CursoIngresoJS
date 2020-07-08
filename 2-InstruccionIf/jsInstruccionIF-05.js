/* Al ingresar una edad solo debemos informar si la persona NO es adolescente. */

function mostrar() {
  var edad = txtIdEdad.value;
  if (edad < 13 || edad > 17) {
    alert("Uhmm, usted no es adolescente?");
  }
} //FIN DE LA FUNCIÓN
