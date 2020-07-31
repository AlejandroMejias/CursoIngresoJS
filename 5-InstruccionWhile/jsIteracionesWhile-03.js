/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
  var clave;
  clave = prompt("Ingrese su contraseña para ingresar");

  while (clave != "utn750")
  {
    clave = prompt("La clave es incorrecta, vuelve a intentarlo");
  }
	alert(" Welcome a UTN™ ");
  
} //FIN DE LA FUNCIÓN
