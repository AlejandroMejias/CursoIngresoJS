/* Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años). */

function mostrar() {
  var edad = txtIdEdad.value;
  if (edad > 17) {
    alert("Eres mayor de edad!!");
  } else if (edad < 13) {
    alert("Eres un niño!");
  } else {
    alert("Usted es adolescente todavía");
  }
} //FIN DE LA FUNCIÓN
