//Realiza un script que pida una cadena de texto y lo muestre poniendo el signo – entre cada carácter sin usar el método replace.
// Por ejemplo, si tecleo “hola qué tal”, deberá salir “h-o-l-a- -q-u-e- -t-a-l”.

const pantalla = document.getElementById("pantalla");
const cadena = prompt("Ingrese una cadena de texto");
let i = 0;
let v = 0;
let cadenaSigno;
let prueba
console.log(cadena.length);
for (i = 0; i < cadena.length; i++) {
  cadenaSigno = cadena.charAt(v);
  cadenaSigno += "-";
  pantalla.innerHTML +=` ${cadenaSigno}`;
  prueba += cadenaSigno
  //console.log(prueba);
 
  //pantalla.innerHTML = ` resultado : ${cadenaSigno}`;
   v++;
console.log(prueba)
//pantalla.innerHTML = ` resultado : ${prueba}`;
}