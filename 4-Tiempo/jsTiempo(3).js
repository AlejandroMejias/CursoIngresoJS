var intervalo;
var contador = 0;
function inicio() {
  intervalo = setInterval(() => {
    contador++;
    alert(`Bienvenidos a la UTN FRA N°: ${contador}`);
    return intervalo;
  }, 2000);
}
function fin() {
  clearInterval(intervalo);
}
