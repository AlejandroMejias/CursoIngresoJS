/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
  var num;
  num = prompt("Ingrese un número entre 0 y 10 para acceder.");
  num = parseInt(num);
  while (num < 0 || num > 9 || isNaN(num))
  {
    num = prompt("ERROR! Debe ser un numero desde 0 a 9");
  }
  txtIdNumero.value = num;
} //FIN DE LA FUNCIÓN
