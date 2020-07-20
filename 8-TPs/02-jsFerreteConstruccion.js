/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo() {
  var ancho;
  var largo;
  var perimetro;
  var alambrado;

  ancho = txtIdLargo.value;
  largo = txtIdAncho.value;

  ancho = parseInt(ancho);
  largo = parseInt(largo);

  /* CalCULAMOS PERIMETRO */
  perimetro = ancho * 2 + largo * 2;

  alambrado = perimetro * 3;

  alert(`Se necesitan ${alambrado} mts de alambre`);
}
function Circulo() {
  var radio;
  var perimetro;
  var alambrado;
  const PI = Math.PI;

  radio = txtIdRadio.value;
  radio = parseInt(radio);

  /* Calculamos el perimetro */
  perimetro = 2 * PI * radio;

  alambrado = perimetro * 3;
  alambrado = alambrado.toFixed(1);

  alert(`Se necesitan ${alambrado} mts de alambre para un terreno con radio de ${radio} mts`);
}
function Materiales() {
    var ancho;
    var largo;
    var area;
    var CantidadCemento;
    var CantidadCal;
    const CEMENTO = 2;
    const CAL = 3;

    ancho = txtIdLargo.value;
    largo = txtIdAncho.value;

    ancho = parseInt(ancho);
    largo = parseInt(largo);

    /* CALCULO EL AREA */
    area = ancho * largo;

    CantidadCemento = area * CEMENTO;
    CantidadCal = area * CAL;

    alert(`Se necesitan ${CantidadCemento} bolsas de cemento y ${CantidadCal} bolsas de cal`);

}
