/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {
  var num;
  var contador = 0;
  var numeroMax = 0;
  var numeroMin = 0;
  var seguir = true;

  do {
    contador++;
    num = parseInt(prompt("Ingrese un numero positivo o negativo"));
    /* Validamos el numero ingresado */
    while (isNaN(num)) {
      num = parseInt(prompt("ERROR! Debes ingresar numeros unicamente"));
    }
    if (contador == 1) {
      numeroMax = num;
      numeroMin = num;
    }
    /* Buscamos el maximo o el minimo */
    if (num > numeroMax) {
      numeroMax = num;
    } else if (num < numeroMin) {
      numeroMin = num;
    }
    seguir = confirm("Deseas continuar?");
  } while (seguir);
  txtIdMaximo.value = numeroMax;
  txtIdMinimo.value = numeroMin;
} //FIN DE LA FUNCIÓN
