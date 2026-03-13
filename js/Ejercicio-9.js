//Crea un script que escriba los números del 1 al 500, que indique cuáles son múltiplos de 4 y de 9
// y que cada 5 líneas muestre una línea horizontal. Por ejemplo :
const pantalla = document.getElementById("pantalla");
let i = 1;
while (i <= 5) {
  
    console.log(i);
    if( i % 2){
        pantalla.innerHTML = `<p>mensaje ${i}<\p>` 
    }else{
      pantalla.innerHTML +=`<p>${i}<p/>` ;  
    }
  
  i++;
    
}
console.log("sali")
