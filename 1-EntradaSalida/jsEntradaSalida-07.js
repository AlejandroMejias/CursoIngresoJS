/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/

function sumar() {
  var numeroUno;
  var numeroDos;
  var result;
  numeroUno = txtIdNumeroUno.value;
  numeroDos = txtIdNumeroDos.value;
  result = numeroUno + numeroDos;
  alert(`La suma da como resultado: ${result}`);
}

function restar() {
  var numeroUno;
  var numeroDos;
  var result;
  numeroUno = txtIdNumeroUno.value;
  numeroDos = txtIdNumeroDos.value;
  result = numeroUno - numeroDos;
  alert(`Las resta da como resultado: ${result}`);
}

function multiplicar() {
  var numeroUno;
  var numeroDos;
  var result;
  numeroUno = txtIdNumeroUno.value;
  numeroDos = txtIdNumeroDos.value;
  result = numeroUno * numeroDos;
  alert(`La multiplicacion es: ${result}`);
}

function dividir() {
  var numeroUno;
  var numeroDos;
  var result;
  numeroUno = txtIdNumeroUno.value;
  numeroDos = txtIdNumeroDos.value;
  result = numeroUno / numeroDos;
  result = result.toFixed(1);
  alert(`La multiplicacion es: ${result}`);
}
