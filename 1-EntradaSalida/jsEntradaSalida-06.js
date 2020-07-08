/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar() {
  var numeroUno = parseInt(txtIdNumeroUno.value);
  var numeroDos = parseInt(txtIdNumeroDos.value);
  var result = numeroUno + numeroDos;
  alert(`La suma da como resultado ${result}`);
}
