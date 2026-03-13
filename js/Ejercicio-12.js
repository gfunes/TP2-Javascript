//Realiza un script que genere un número aleatorio entre 1 y 99

const pantalla = document.getElementById("pantalla");
alert("devuelve un valor aleatorio entre 1 y 99")

//pantalla.innerHTML=`el valor devuelto es ${aleatorio}`
while(confirm("Generar numero aleatorio?")){
    const aleatorio =Math.floor(Math.random()*99)+1
pantalla.innerHTML=`el numero es: ${aleatorio}`
}
console.log(aleatorio);