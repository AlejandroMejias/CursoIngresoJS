/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	var num;
	var sumaPositivos;
	var contadorPositivos;
	var promedioPositivos;
	var ceros;
	var numerosPares;
	var sumaNegativos;
	var contadorNegativos;
	var promedioNegativos;
	var diferenciaPyN;
	var seguir;

	sumaPositivos = 0;
	contadorPositivos = 0;
	ceros = 0;
	numerosPares = 0;
	sumaNegativos = 0;
	contadorNegativos = 0;
	seguir = true;

	do
	{
		num = parseInt(prompt("Ingrese un numero positivo o negativo"));
		/* Validamos el ingreso */
		
		while(isNaN(num))
		{
			num = parseInt(prompt("ERROR! Debe ingresar numeros solamente"));
		}
		/* Positivos , negativos y ceros */
		if(num > 0)
		{
			sumaPositivos += num;
			contadorPositivos++;
		}
		else
		{
			if(num < 0)
			{
				sumaNegativos += num;
				contadorNegativos++;
			}
			else
			{
				ceros++;
			}
		}
		
		/* Numeros pares */
		if(num % 2 == 0)
		{
			numerosPares++;
		}
		seguir = confirm("Deseas continuar?");
	}while(seguir);
	
	promedioNegativos = sumaNegativos / contadorNegativos;
	promedioNegativos = promedioNegativos.toFixed(1);
	promedioPositivos = sumaPositivos / contadorPositivos;
	promedioPositivos = promedioPositivos.toFixed(1);
	diferenciaPyN = contadorPositivos - contadorNegativos;

	document.write(`Suma de negativos: ${sumaNegativos}<br>`);
	document.write(`Suma de positivos: ${sumaPositivos}<br>`);
	document.write(`La cantidad de positivos: <strong>${contadorPositivos}</strong><br>`);
	document.write(`La cantidad de negativos: <strong>${contadorNegativos}</strong><br>`);
	document.write(`Cantidad de ceros: ${ceros}<br>`);
	document.write(`Numeros pares: ${numerosPares}<br>`);
	document.write(`Promedio de positivos: ${promedioPositivos}<br>`);
	document.write(`Promedio de negativos: ${promedioNegativos}<br>`);
	document.write(`Diferencia entre positivos y negativos: <strong>${diferenciaPyN}</strong>`);
} //FIN DE LA FUNCIÓN

