//Realiza un script que pida un texto y lo muestre en mayúsculas.
const pantalla = document.getElementById("pantalla");
const cadena = prompt("Ingrese una cadena de texto");
const cadenaM = cadena.toUpperCase();
pantalla.innerHTML = `cadena "${cadena}" convertida a Mayusculas "${cadenaM}"`;
