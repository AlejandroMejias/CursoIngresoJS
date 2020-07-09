/* en el evento onLoad del 'BODY' invocar a la function Inicio(), en esta funcion se creará un numero random entre 2000 y 12000 (para los milisegundos) y con este random disparamos un setTimeout para la funtion 'SegundosEnElAire'.Esta debe mostrar el botón 'El oculto' y comenzar a tomar el tiempo. Por último, el botón 'El oculto' disparará la function 'ContarMilisegundos' que mostrará el tiempo transcurrido. */

var tiempoInicio;
var tiempoFinal;
var duracion;
var num;

function inicio() {
  num = Math.floor(Math.random() * 10000 + 2000);
  setTimeout(Mostrar, num);
}
function Mostrar() {
  document.getElementById("secreto").style.visibility = "visible";
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
}
function ContarMilisegundos() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();
  duracion = tiempoFinal - tiempoInicio;
  alert(`Transcurrieron ${duracion} mls`);
}
