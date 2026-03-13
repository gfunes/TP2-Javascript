//Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :
//  1
//  22
//  333
//  4444
//  55555
//  666666
//   …….
const pantalla = document.getElementById("pantalla");
let fila;
let vueltas = 30;
for (let i = 1; i <= vueltas; i++) {
  let fila = "";
  for (h = 1; h <= i; h++) {
    fila += i;
  }
  console.log(fila);
  pantalla.innerHTML += `<p>${fila}</p>`;
}
