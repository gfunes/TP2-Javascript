//Realiza un script que muestre la posición de la primera vocal de un texto introducido por teclado.
const pantalla = document.getElementById("pantalla");
const cadena = prompt("Ingrese una cadena de texto");

const index = cadena.search(/[aeiou]/i);
const vocal = cadena[index];
console.log(vocal);
pantalla.innerHTML = ` la primera vocal es la "${vocal}" y se encuentra en la posicion nro: ${index}`;
