"use strict";
let nombre = "Luis Raya";
const pi = 3.141516;
var ciudad = "CDMX";

console.log(nombre,pi,ciudad)

let texto = "El Rayita es genial";
let numero = 12;
let numero2 = 1;
let bool = true;

console.log(typeof texto, typeof numero, typeof bool);
/*
let nombre2 = prompt("¿Como te llamas?");
alert("Bienvenido"+ nombre2);

let num = prompt("Ingresa tu calificacion")
if (num>=90){
    alert("Sencishito")
}
else if (num<=80 ||num>=60){
    alert("Si se pudo burro")
}
else{
    alert("Valio VRG")
}

console.log(5+'a');
*/
/*
let usuario = prompt("Ingresa usuario");
let clave = prompt("contraseña");

if (usuario === "Admin" && clave === "12345"){
    alert("Acceso permitido");
}else {
    alert("nel prro");
}

let dia = prompt("Ingrese su dia");

switch(dia.toLowerCase()){
    case "Lunes":
        alert("Inicio de semana prros");
        break;
    case "Martes":
        alert("Martes nmms");
        break;
    case "Miercoles":
    case "Jueves":
        alert("No ubico esos dias mijo");
        break;
    case "Viernes":
    case "Sabado":
        alert("Vamos a ir a tomar siiiiiiuu");
        break;
    default:
        alert("Parametro no permtido");                        
}
*/

//Ejercicio: determinar si el numero ingresado por el usuario es par o impar//

let num = parseInt(prompt("Ingresa un número:"));

if (!isNaN(num)) {
    let mitad = Math.floor(num / 2);
    let dobleDeMitad = mitad * 2;

    if (dobleDeMitad === num) {
        alert("El número ingresado es par.");
    } else {
        alert("El número ingresado es impar.");
    }
} else {
    alert("Por favor, ingresa un número válido.");
}

