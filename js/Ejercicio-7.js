//Haz un script que escriba una pirámide inversa de los números del 1 al número que indique el usuario (no mayor de 50) 
//  de la siguiente forma : (suponiendo que indica 30).
//  303030303030303030303030303030303030303030303030303030303030
//  2929292929292929292929292929292929292929292929292929292929
//  28282828282828282828282828282828282828282828282828282828
//  …..
//  333
//  22
//  1
const filas = prompt (" Ingresa la cantidad de filas de la piramide (max. 50)") 
const pantalla = document.getElementById("pantalla");

 let vueltas 
for (let i = filas; i >=1 ; i--) {
  vueltas = "";
  console.log(i)
  for (h = i; h >= 1; h--) {
    vueltas += i;
  }
  console.log(vueltas);
  pantalla.innerHTML += `<p>${vueltas}</p>`;
}