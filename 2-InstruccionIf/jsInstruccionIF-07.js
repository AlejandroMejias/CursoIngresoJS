/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

/* function mostrar()
{
  var edad;
  var EstadoCivil;
  edad = txtIdEdad.value;
  edad = parseInt(edad);
  EstadoCivil = estadoCivil.value;

  if(!(edad > 17))
  {
    if(!(EstadoCivil == "Soltero"))
    {
      alert("Es muy pequeño para NO estar soltero!!");
    }
  }
} //FIN DE LA FUNCIÓN */

function mostrar()
{
  /*
Se pide ingresar una edad y un estado cicvil
	a todos los mayores de edad, mostrar el mensaje "se responsable"
	a todos los menores de edad, mostrar el mensaje "respeta a tus mayores"
	a los adultos mayores( mas de 60 años) tambien informar "sos persona de riesgo"
	a los niños tambien informar "hagan la tarea" 
	a los adolescentes casado o Divorciado " sos muy joven para no ser soltero"
	a los mayores de edad solteros, tambien informar "a vivir la vida"
	a los mayores de edad casados , tambien informar "a disfrutar la pareja"
	a los divorciados informar tambien "a intentarlo nuevamente"

    la menor cantidad de if 
    no repetir los alert o los mensajes 
    
    Alejandro Mejias, DNI: 95639761
    
*/

  var edad;
  var EstadoCivil;
  var mensaje;
  var mensajeGeneral;

  edad = txtIdEdad.value;
  edad = parseInt(edad);

  EstadoCivil = estadoCivil.value;
  mensaje = `se responsable`;

  if (edad > 60)
  {
    mensajeGeneral = `${mensaje}, eres persona de riesgo!!`;
  }
  else
  {
    if(edad > 17)
    {
      switch(EstadoCivil)
      {
        case "Casado":
          mensajeGeneral = `${mensaje}, a disfrutar la pareja`;
          break;
        case "Soltero":
          mensajeGeneral = `${mensaje}, a vivir la vida`;
          break;
        default:
          mensajeGeneral = `${mensaje}, a intentarlo nuevamente`;
      }
    }
    else
    {
      mensaje = `respeta a tus mayores!!`;
      if(edad < 13)
      {
        mensajeGeneral = `${mensaje}, hagan la tarea!!`;
      }
      else
      {
        if(!(edad > 18))
        {
          switch(EstadoCivil)
          {
            case "Divorciado":
            case "Casado":
              mensajeGeneral = `eres muy joven para no ser Soltero!!`;
              break;
            default:
              mensajeGeneral = `${mensaje}!!`;
          }
        }
      }
    }
  }
  alert(mensajeGeneral);
}
