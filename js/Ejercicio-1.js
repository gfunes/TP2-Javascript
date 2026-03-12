//Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir,
// si la edad ingresada no es un número válido indicarlo en un mensaje.
const pantalla = document.getElementById("pantalla");
const edad = prompt("Ingresa tu edad :");

if (edad > 18) {
  if (edad > 99) {
    alert("ingresaste una edad no valida");
  } else {
    alert("Genial !!! ... ya puedes conducir");
  }
} else {
  alert("Lo siento todavia eres menor de edad para condicir");
}
