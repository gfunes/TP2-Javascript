//Realiza un script que pida número de filas y columnas y escriba una tabla. 
// Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden descendente. 
// Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1.

const pantalla = document.getElementById("pantalla");
const table = document.getElementById("table");
const filas = parseInt(prompt(" Ingresa nro de filas :"));
const columnas = parseInt(prompt("Ingresa nro de columnas :"));
//const col = document.getElementById("col");
let celda = filas * columnas;
document.writeln('<table  class="table table-striped"><tbody>');
for (let indiceFilas = 1; indiceFilas <= filas; indiceFilas++) {
  document.writeln(`<tr>`);
  for (let indiceColumnas = 1; indiceColumnas <= columnas; indiceColumnas++) {
    document.writeln(`<td>${celda--}</td>`);
  }
  document.writeln(`</tr>`);
}
document.writeln(" </tbody></table>");
