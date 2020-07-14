/* Al ingresar una hora, informar:
si está entre las 7 y las 11 : "Es de mañana.". */
function mostrar() {
  var horaDelDia;
  horaDelDia = txtIdHora.value;
  switch (true) {
    case horaDelDia > 6 && horaDelDia < 12:
      alert("Es de mañana!!");
  }
} //FIN DE LA FUNCIÓN
