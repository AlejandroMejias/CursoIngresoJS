/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados() {
  var gradosFahrenheit;
  var gradosCentigrados;

  gradosFahrenheit = txtIdTemperatura.value;

  gradosFahrenheit = parseFloat(gradosFahrenheit);

  gradosCentigrados = gradosFahrenheit - 32;
  gradosCentigrados = gradosCentigrados / 1.8;
  gradosCentigrados = gradosCentigrados.toFixed(2);

  alert(`${gradosFahrenheit}°Fahrenheit, equivalen a ${gradosCentigrados} °Centigrados`);
}

function CentigradosFahrenheit() {
  var gradosFahrenheit;
  var gradosCentigrados;

  gradosCentigrados = txtIdTemperatura.value;

  gradosCentigrados = parseFloat(gradosCentigrados);

  gradosFahrenheit = gradosCentigrados * 1.8;
  gradosFahrenheit = gradosFahrenheit + 32;
  gradosFahrenheit = gradosFahrenheit.toFixed(2);

  alert(`${gradosCentigrados}°Centigrados, equivalen a ${gradosFahrenheit} °Fahrenheit`);
}
