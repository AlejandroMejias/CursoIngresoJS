/* Luego de presiona el botón 'Iniciar', se ocultara el botón "el oculto". Después de 3(tres) segundo será visible nuevamente. */

function inicio() {
  document.getElementById("secreto").style.visibility = "hidden";

  setTimeout(() => {
    document.getElementById("secreto").style.visibility = "visible";
  }, 3000);
}
