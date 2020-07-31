/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
  var num;
  var seguir;
  var sumaNum;
  var contadorNum;
  var promedioNum;

  seguir = true;
  sumaNum = 0;
  contadorNum = 0;
  
  while (seguir)
  {
    num = parseInt(prompt("Ingresa un numero"));
    /* Validamos dicho numero ingresado */
    while (isNaN(num))
    {
      num = parseInt(prompt("ERROR! Se permite solo numeros"));
    }
    sumaNum += num;
    contadorNum++;
    seguir = confirm("Deseas continuar ?");
  }
  promedioNum = sumaNum / contadorNum;
  txtIdSuma.value = sumaNum;
  txtIdPromedio.value = promedioNum;
} //FIN DE LA FUNCIÓN
