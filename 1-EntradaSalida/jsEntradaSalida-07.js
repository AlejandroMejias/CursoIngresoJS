/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

var numeroUno;
var numeroDos;
var result;
function sumar() {
  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  result = numeroUno + numeroDos;
  alert(`La suma da como resultado: ${result}`);
}

function restar() {
  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  result = numeroUno - numeroDos;
  alert(`Las resta da como resultado: ${result}`);
}

function multiplicar() {
  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  result = numeroUno * numeroDos;
  alert(`La multiplicacion es: ${result}`);
}

function dividir() {
  numeroUno = parseInt(txtIdNumeroUno.value);
  numeroDos = parseInt(txtIdNumeroDos.value);
  result = numeroUno / numeroDos;
  result = result.toFixed(1);
  alert(`La multiplicacion es: ${result}`);
}
