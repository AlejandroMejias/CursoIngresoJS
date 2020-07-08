/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento() {
	var sueldo = parseInt(txtIdImporte.value);
	var result = sueldo * 0.75;
	txtIdResultado.value = result;
}
