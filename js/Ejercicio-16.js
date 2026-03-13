// Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

const pantalla = document.getElementById("pantalla");
const cadena = prompt("Ingrese una cadena de texto");
let textInvertido = "";
for (let i = cadena.length - 1; i >= 0; i--) {
  textInvertido += cadena[i];
  console.log(textInvertido);
}
pantalla.innerHTML = `la cadena : ${cadena} , al revez seria: ${textInvertido}`;
//console.log(cadena.length)
