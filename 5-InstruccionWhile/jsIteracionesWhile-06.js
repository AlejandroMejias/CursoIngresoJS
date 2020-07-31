/* Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio. */
function mostrar()
{
  var num;
  var sumaNum;
  var promedioNum;
  var contador;

  sumaNum = 0;
  contador = 0;
  
  while (contador < 5)
  {
    contador++;
    num = parseInt(prompt("Ingrese numeros para calcular el promedio de los mismos"));

    /* Validamos si lo ingresado es un numero o no  */
    while (isNaN(num))
    {
      num = parseInt(prompt("ERROR! Se permite unicamente numeros"));
    }
    sumaNum += num;
  }
  promedioNum = sumaNum / 5;
  txtIdSuma.value = sumaNum;
  txtIdPromedio.value = promedioNum;
} //FIN DE LA FUNCIÓN
