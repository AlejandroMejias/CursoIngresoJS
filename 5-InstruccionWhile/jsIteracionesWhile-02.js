/*
al presionar el botón mostrar 10 repeticiones 
con números DESCENDENTES, desde el 10 al 1.*/
function mostrar()
{
  var contador;
  var num;
  contador = 10;
  num = 0;

  while (num < contador)
  {
    document.write("Iteracion N°:" + " " + contador + "<br>");
    contador--;
  }
} //FIN DE LA FUNCIÓN
