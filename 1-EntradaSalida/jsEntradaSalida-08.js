/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto() {
  var dividendo;
  var divisor;
  var result;
  dividendo = txtIdNumeroDividendo.value;
  divisor = txtIdNumeroDivisor.value;
  result = dividendo % divisor;
  alert(`El resto es: ${result}`);
}
