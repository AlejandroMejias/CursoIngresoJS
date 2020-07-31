/* Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.' */

function mostrar()
{
  var edad;
  var EstadoCivil;
  edad = txtIdEdad.value;
  edad = parseInt(edad);
  EstadoCivil = estadoCivil.value;
  
 /*  if (edad > 17 && EstadoCivil == "Soltero")
  {
    alert("Es soltero y no es menor de edad");
  } */
  if(!(edad < 18))
  {
    if(!(EstadoCivil != "Soltero"))
    {
      alert("Es soltero y no es menor!!");
    }
  }
} //FIN DE LA FUNCIÓN
