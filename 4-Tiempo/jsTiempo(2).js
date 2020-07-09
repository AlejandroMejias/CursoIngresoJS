
var intervalo;
function inicio() {
  intervalo = setInterval(() => {
    alert("Bienvenidos a la UTN FRA");
  }, 3000);
}
function fin() {
  clearInterval(intervalo);
}
