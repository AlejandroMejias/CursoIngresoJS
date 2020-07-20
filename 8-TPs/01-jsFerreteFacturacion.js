/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar() {
  var precioUno;
  var precioDos;
  var precioTres;
  var result;

  precioUno = txtIdPrecioUno.value;
  precioDos = txtIdPrecioDos.value;
  precioTres = txtIdPrecioTres.value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  result = precioUno + precioDos + precioTres;

  alert(`La suma da como resultado: ${result}$`);
}
function Promedio() {
  var precioUno;
  var precioDos;
  var precioTres;
  var result;
  var promedio;

  precioUno = txtIdPrecioUno.value;
  precioDos = txtIdPrecioDos.value;
  precioTres = txtIdPrecioTres.value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  result = precioUno + precioDos + precioTres;
  promedio = result / 3;
  promedio = promedio.toFixed(1);

  alert(`El promedio es: ${promedio}$`);
}
function PrecioFinal() {
  var precioUno;
  var precioDos;
  var precioTres;
  var result;
  var precioConIva;

  precioUno = txtIdPrecioUno.value;
  precioDos = txtIdPrecioDos.value;
  precioTres = txtIdPrecioTres.value;

  precioUno = parseInt(precioUno);
  precioDos = parseInt(precioDos);
  precioTres = parseInt(precioTres);

  result = precioUno + precioDos + precioTres;
  precioConIva = result * 1.21;

  alert(`El importe con iva es: ${precioConIva}$`);
}
