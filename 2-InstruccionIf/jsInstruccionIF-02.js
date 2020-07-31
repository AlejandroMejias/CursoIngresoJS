/* Al ingresar una edad debemos informar solo si la persona es mayor de edad */

function mostrar() {
  var edad;
  edad = txtIdEdad.value;
  edad = parseInt(edad);
  if (edad > 17) {
    alert("Ustes es mayor de edad");
  }
} //FIN DE LA FUNCIÓN
