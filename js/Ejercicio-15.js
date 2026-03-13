//Realiza un script que cuente el número de vocales que tiene un texto.
const str = prompt("Escriba una frase :");
console.log(str, str.length);
const vocales = /[aeiuo]/;
const encontradas = str.match(/[aeiuo]/gi); // "gi" g indica que devolvera todas las coincidencias i  indica que no diferencia entre  mayusculas y minusculas
console.log(encontradas);
document.writeln("las vocales encontradas son :"," "  + encontradas)
