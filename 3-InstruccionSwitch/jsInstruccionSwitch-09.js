/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar() {
  var estacionIngresada;
  var destino;
  var costo;
  var result;
  estacionIngresada = txtIdEstacion.value;
  destino = txtIdDestino.value;
  costo = 15000;
 

  switch (estacionIngresada) {
    case "Invierno":
      if (destino == "Bariloche") {
        result = costo * 0.2 + costo;
      } else if (destino == "Mar del plata") {
        result = costo * 0.8;
      } else {
        result = costo * 0.9;
      }
      alert(`Para ${destino} en ${estacionIngresada} cuesta ${result} pesos`);
      break;
    case "Verano":
      if (destino == "Bariloche") {
        result = costo * 0.8;
      } else if (destino == "Mar del plata") {
        result = costo * 0.2 + costo;
      } else {
        result = costo * 0.1 + costo;
      }
      alert(`Para ${destino} en ${estacionIngresada} cuesta ${result} pesos`);
      break;
    default:
      if (destino == "Cordoba") {
        alert(`${destino} no tiene descuento en ${estacionIngresada}, cuesta ${costo} pesos`);
      } else {
        result = costo * 0.1 + costo;
        alert(`Para ${destino} en ${estacionIngresada} cuesta ${result} pesos`);
      }
  }
} //FIN DE LA FUNCIÓN
