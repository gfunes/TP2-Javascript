//Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
// Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.
const pantalla = document.getElementById("pantalla");
let texto = prompt("ingrese una cadena de texto :");
let cadena = texto ;
while (confirm("Desea seguir ingresando cadenas de texto?")) {
  let repite = prompt("Ingrese cadena de texto :");
  const separador = repite ;
  cadena = cadena + "-" + separador ;
  console.log(cadena);
}
console.log(cadena);
pantalla.innerHTML = `<p>la cadena de texto ingresada es :" , ${cadena} , "</p>`;
