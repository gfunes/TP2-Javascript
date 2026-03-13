//Realiza un script que pida números hasta que se pulse “cancelar”.
// Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
// Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
const pantalla = document.getElementById("pantalla");


let suma=0
 
while (confirm("Ingresa un numero o salir")){

    let numero = parseInt(prompt("Ingrese el numero :"));
    if (isNaN(numero)) {
         alert("Lo que ingresaste no es un numero");
         
      } else {
         suma = suma + numero;
     }
    }
  console.log(suma);
pantalla.innerHTML = `<p>La suma de los numeros ingresados es : ${suma} </p>`