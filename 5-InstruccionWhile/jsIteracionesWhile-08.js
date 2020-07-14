/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar() {
  var num;
  var seguir;
  var positivos;
  var negativos;

  seguir = "si";
  positivos = 0;
  negativos = 1;
  
  while (seguir == "si") {
    num = parseInt(prompt("Ingrese un numero negativo o positivo"));
    /* Validamos que sea un numero */
    while (isNaN(num)) {
      num = parseInt(prompt("ERROR! Solamente se permiten numeros"));
    }
    if (num > 0) {
      positivos += num;
    } else {
      negativos *= num;
    }
    seguir = prompt("Desea continuar? Escriba si ó no");
  }
  txtIdSuma.value = positivos;
  txtIdProducto.value = negativos;
} //FIN DE LA FUNCIÓN
