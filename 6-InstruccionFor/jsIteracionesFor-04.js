/* al presionar el botón repetir hasta que utilizamos 'BREAK'. */

function mostrar() {
  for (let i = 1; i < 200; i++) {
    document.write(` Vuelta ${i} antes del break <br>`);
    if (i == 10) {
      break;
    }
  }
} //FIN DE LA FUNCIÓN
