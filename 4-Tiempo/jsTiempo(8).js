/* Luego de presiona el botón 'Iniciar',se dispará un temporizador de una funcion que haga visible el botón "el oculto" y que tome el tiempo de inicio.
El botón "el oculto" ejecutará la function "ContarMilisegundos" que tome el tiempo de finalización calcule la diferencia y muestre el resultado. */

var tiempoInicio;
var tiempoFinal;
var duracion;

function inicio() {
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
  setTimeout(Mostrar, 3000);
}
function Mostrar() {
  document.getElementById("secreto").style.visibility = "visible";
}
function ContarMilisegundos() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();
  duracion = tiempoFinal - tiempoInicio;
  alert(`Tiempo de finalizacion: ${duracion} mls`);
}
