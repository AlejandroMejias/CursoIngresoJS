/* Luego de presiona el botón 'Iniciar',se dispará un temporizador de una funcion que haga visible el botó "el oculto". */

var intervalo;
var tiempoInicio;
var tiempoFinal;
var duracion;

function inicio() {
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
  intervalo = setTimeout(Comienzo, 2000);
}
function Comienzo() {
  document.getElementById("secreto").style.visibility = "visible";
  Finalizar();
}
function Finalizar() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();

  duracion = tiempoFinal - tiempoInicio;
  alert(`Tardó ${duracion} mls en aparecer nuevamente`);
}
