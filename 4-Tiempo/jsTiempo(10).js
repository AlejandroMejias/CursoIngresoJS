/* en el evento onLoad del 'BODY' invocar a la function Inicio(), en esta funcion se creará un numero random entre 2000 y 12000 (para los milisegundos) y con este random disparamos un setTimeout para la funtion 'SegundosEnElAire'.Esta debe mostrar el botón 'El oculto' y comenzar a tomar el tiempo. Por último, el botón 'El oculto' disparará la function 'ContarMilisegundos' que mostrará el tiempo transcurrido. 

ADEMAS!!!!! , sumandole los siguientes mensajes.
*si Tardo entre 0 y 500 milisegundos :"Usted es Flash".
*si Tardo entre 501 y 1000 milisegundos :"bien ahí, segui practicando".
*si Tardo entre 1001 y 3000 milisegundos :"tenemos los deditos duros???".
*si Tardo mas de 3000 milisegundos :"Te quedastes dormido???".*/

var tiempoInicio;
var tiempoFinal;
var duracion;
var num;

function inicio() {
  num = Math.floor(Math.random() * 10000 + 2000);
  setTimeout(Mostrar, num);
}

function Mostrar() {
  document.querySelector("#secreto").style.visibility = "visible";
  tiempoInicio = new Date();
  tiempoInicio = tiempoInicio.getTime();
}
function ContarMilisegundos() {
  tiempoFinal = new Date();
  tiempoFinal = tiempoFinal.getTime();
  duracion = tiempoFinal - tiempoInicio;
  if (duracion < 500) {
    alert("Usted es flash!!");
  } else if (duracion > 500 && duracion <= 1000) {
    alert("Bien ahí!! Continua practicando");
  } else if (duracion > 1000 && duracion <= 3000) {
    alert("Tenemos los deditos duros eh??");
  } else {
    alert("Te quedaste dormido???");
  }
}
