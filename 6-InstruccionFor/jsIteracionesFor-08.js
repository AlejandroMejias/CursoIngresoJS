/* al presionar el botón pedir un número. Informar si el numero es PRIMO o no. */

function mostrar() {
  var num;
  var Divisor = 0;
  num = prompt("Ingrese un numero para determinar si es PRIMO o no");
  for (let i = 2; i <= num; i++) {
    /* Buscamos la cantidad de divisiones */
    if (num % i == 0) {
      Divisor++;
    }
  }
  /* Determinamos si es primo o no */
  if (Divisor < 2 && num != 1) {
    alert(`${num} es primo!!`);
  } else {
    alert(`No es primo !!!!!`);
  }
} //FIN DE LA FUNCIÓN
