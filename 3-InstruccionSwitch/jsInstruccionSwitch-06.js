/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.".
si está entre las 12 y las 19 : "Es de tarde.".
si está entre las 20 y las 24 o entre las 0 y las 6 : "Es de noche.".
si NO está entre las 0 y las 24 : "la hora no existe.". */
function mostrar() {
  var horaDelDia = txtIdHora.value;
  switch (true) {
    case horaDelDia > 6 && horaDelDia < 12:
      alert("Es de mañana!!");
      break;
    case horaDelDia > 11 && horaDelDia < 20:
      alert("Es de tarde!!");
      break;
    case horaDelDia < 0 || horaDelDia > 24 || isNaN(horaDelDia):
      alert("La hora no existe!!");
      break;
    default:
      alert("Es de noche!!!");
  }
} //FIN DE LA FUNCIÓN
