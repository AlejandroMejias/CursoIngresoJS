/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
  var num;
  var contador;
  var numeroMax;
  var numeroMin;
  var seguir;
  
  contador = 0;
  numeroMax = 0;
  numeroMin = 0;
  seguir = true;

  do
  {
    contador++;
    num = parseInt(prompt("Ingrese un numero positivo o negativo"));

    /* Validamos el numero ingresado */
    while (isNaN(num))
    {
      num = parseInt(prompt("ERROR! Debes ingresar numeros unicamente"));
    }
    if (contador == 1)
    {
      numeroMax = num;
      numeroMin = num;
    }
    /* Buscamos el maximo o el minimo */

    if (num > numeroMax)
    {
      numeroMax = num;
    }
    if (num < numeroMin)
    {
      numeroMin = num;
    }
    seguir = confirm("Deseas continuar?");
  }while(seguir);
  txtIdMaximo.value = numeroMax;
  txtIdMinimo.value = numeroMin;
} //FIN DE LA FUNCIÓN
