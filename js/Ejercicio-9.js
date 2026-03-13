//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9
// y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
const pantalla = document.getElementById("pantalla");
const asteriscos = document.getElementById("asteriscos");
let i = 1;
let v = 1;
let h = 5;
while (i <= 30) {
  if (v==h){
      h=h+5;
     asteriscos.innerHTML = `****************`;
  }else {
    if (i % 4 == 0) {
    pantalla.innerHTML += `<p>${i} es multiplo de 4<\p>`;
  } else {
    if (i % 9 == 0) {
      pantalla.innerHTML += `<p>${i} es multiplo de 9<\p>`;
    } else {
    }
    pantalla.innerHTML += `<p>${i}<p/>`;
  }
}
  i++;
  v++;
  
}

console.log(i);
