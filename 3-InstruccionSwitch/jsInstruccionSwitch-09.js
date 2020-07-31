/* una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento */

function mostrar()
{
    const COSTO = 15000;
    var estacionIngresada;
    var destino;
    var result;
    estacionIngresada = txtIdEstacion.value;
    destino = txtIdDestino.value;
  
    switch(estacionIngresada)
  {
    case "Invierno":
      switch(destino)
      {
        case "Bariloche":
          result = COSTO * 1.2;
          break;
        case "Mar del plata":
          result = COSTO * 0.80;
          break;
        default:
          result = COSTO * 0.90;
      }
      break;
    case "Verano":
      switch(destino)
      {
        case "Bariloche":
          result = COSTO * 0.80;
          break;
        case "Mar del plata":
          result = COSTO * 1.2;
          break;
        default:
          result = COSTO * 1.1;
      }
      break;
    default:
      switch(destino)
      {
        case "Bariloche":
        case "Mar del plata":
        case "Cataratas":
          result = COSTO * 1.1;
          break;
        default:
          result = COSTO;
      }
  }
  alert(`Para ${destino} en ${estacionIngresada} cuesta ${result} pesos`);
} //FIN DE LA FUNCIÓN


