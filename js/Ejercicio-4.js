//Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
const pantalla = document.getElementById("pantalla");

let numero = prompt("Ingrese un numero :");
let suma;
if (isNaN(numero)) {
  alert("Lo que ingresaste no es un numero");
  suma = 0;
  } else {
    while (confirm("Ingresa otro numero o cancela")) {
  let numero2 = prompt("ingrese otro numero :");
  suma = suma + numero2;
    suma = numero;
}

  console.log(suma);
}
