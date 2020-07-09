/* al presionar el botón INICIAR se debe mostrar un mensaje de bienvenida "Bienvenidos a la UTN FRA" cada 2 segundos, al mostrar el mensaje 5 veces que se detenga AUTOMATICAMENTE. */

var invertalo;
var contador = 0;

function inicio() {
	intervalo = setInterval(() => {
		contador++;
		alert(`Bienvenidos a la UTN FRA N°: ${contador}`);
		if(contador == 5) {
			fin();
		}
	},2000);
}
function fin () {
	clearInterval(intervalo);
}

