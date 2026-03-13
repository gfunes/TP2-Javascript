//Crea script para generar pirámide siguiente con los números del 1 al número que indique el usuario (no mayor de 50) 

const number = prompt (" Ingresa la cantidad de filas de la piramide (max. 50)") 
const pantalla = document.getElementById("pantalla");

const nro=1
for (let i = 1; i <= number; i++) {
  let fila = "";
  for (h = 2; h <= i; h++) {
    fila +=  h;
  }
  console.log(fila);
  pantalla.innerHTML += `<p>${nro}${fila}</p>`;
}