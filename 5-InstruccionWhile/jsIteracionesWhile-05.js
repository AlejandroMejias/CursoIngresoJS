/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexo = prompt("Ingrese su sexo, f ó m .");
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("ERROR! Ingrese: f para femenino ó m para masculino");
	}
	txtIdSexo.value=sexo;
}//FIN DE LA FUNCIÓN