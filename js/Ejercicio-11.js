//Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *
const pantalla = document.getElementById("pantalla");    
let nombre1 = prompt("Ingrese el primer Nombre :");
     let edad1 = parseInt(prompt("Ingrese su Edad:"));
     let nombre2 = prompt("Ingrese el segundo Nombre :");
     let edad2 = parseInt(prompt("Ingrese su Edad:"));
     let nombre3 = prompt("Ingrese el  tercer Nombre :");
     let edad3 = parseInt(prompt("Ingrese su Edad:"));

let mayor = Math.max(edad1,edad2,edad3)
console.log(mayor)
if (edad1 > edad2){
    if (edad1>edad3){
        pantalla.innerHTML=`el Mayor es ${nombre1} por que tiene ${edad1} años`
    }else{
        pantalla.innerHTML=`el Mayor es ${nombre3} por que tiene ${edad3} años`
    }
}else {
    if (edad2 > edad3){
        pantalla.innerHTML=`el Mayor es ${nombre2} por que tiene ${edad2} años`
    }else{
        pantalla.innerHTML=`el Mayor es ${nombre3} por que tiene ${edad3} años`
    }
}