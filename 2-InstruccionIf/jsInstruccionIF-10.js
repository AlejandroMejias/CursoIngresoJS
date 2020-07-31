/* Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4 */
function mostrar()
{
  var nota;
  var calificacion;
  nota = Math.floor(Math.random() * 10 + 1);
  
/*
   if (nota > 8)
  {
    alert("EXCELENTE CALIFICACION!!!");
  }
  else 
  {
    if (nota > 3)
    {
      alert("Felicitaciones , aprobaste!!!");
    }
    else
    {
      alert("VAMOS!! La próxima se puede!!");
    }
  }  
  */

 /*  if(!(nota > 8))
  {
    if(!(nota < 4))
    {
      alert("Felicitaciones, APROBASTE!!");
    }
    else
    {
      alert("VAMOS!! La proxima se puede!!");
    }
  }
  else
  {
    alert("EXCELENTE CALIFICACION!");
  } */

  if(!(nota > 8))
  {
    if(!(nota < 4))
    {
      calificacion = "Felicitaciones!! Aprobaste!!";
    }
    else
    {
      calificacion = "VAMOS!! La proxima se puede!!";
    }
  }
  else
  {
    calificacion = "EXCELENTE CALIFICACION!";
  }
  alert(calificacion);
} //FIN DE LA FUNCIÓN
