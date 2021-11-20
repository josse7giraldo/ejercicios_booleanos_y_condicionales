/*Escribe un programa que piense un número de forma aleatoria 
del 1 al 10 y le pida al usuario que lo trate de adivinar.
Si el número es correcto debe imprimir en la consola
"Felicitaciones, ese era!", de lo contrario debe imprimir
"Lo siento, intenta nuevamente!" */

let numero = prompt("digite un numero entre el 1 y el 10");
let numero_uno = 1;
let numero_dos = 10;
let Random = numero_uno + Math.floor(Math.random() * 10 );
console.log(Random);

if (numero == Random) {
    console.log ("Felicitaciones; ese es real !");

} else {
    console.log ("Lo siento, intenta nuevamente!");
} 