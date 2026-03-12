//Escribir un programa que solicite una nota (número) de 0  a 10.
// Luego mostrar la calificación en un alert según los siguientes rangos de nota:
// 0-2: Muy deficiente
// 3-4: Insuficiente
// 5-6: Suficiente
//   7: Bien
// 8-9: Notable
//  10: Sobresaliente

//Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”.
// Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
const pantalla = document.getElementById("pantalla");
const nota = parseInt(prompt("ingresa la nota a evaluar :"));
console.log(nota)
switch (nota) {
  case 0:
  case 1:
  case 2:
    //alert("Su nota es Muy Deficiente");
    pantalla.innerHTML = `<p> Su Nota ${nota} es Muy Deficiente</p>`;
    break;
  case 3:
  case 4:
  case 5:
    alert("Su Nota es Insuficiente");
    break;
  case 6:
    alert("Su Nota es Suficiente");
    break;
  case 7:
    alert(" Su Nota esta Bien");
    break;
  case 8:
  case 9:
    alert(" Su Nota es Notable");
    break;
  case 10:
    alert(" Su Nota es Sobresaliente");
    break;
  default:
    alert("ingresaste un valor de nota que no corresponde");
}
