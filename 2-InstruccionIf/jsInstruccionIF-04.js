/* Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .*/
function mostrar() {
  var edad;
  edad = txtIdEdad.value;
  if (edad > 12 && edad < 18) {
    alert("Usted es adolescente!!!");
  }
} //FIN DE LA FUNCIÓN
