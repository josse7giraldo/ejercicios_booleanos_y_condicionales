/*Escribe un programa que le pida al usuario ingresar un número.
Si el número es múltiplo de 3 debe imprimir en la consola "Múltiplo de 3".
Si el número es múltiplo de 5 debe imprimir en la consola "Múltiplo de 5".
Si el número es múltiplo tanto de 3 como de 5
debe imprimir en la consola "Múltiplo de 3 y de 5".
Si no cumple ninguna de las condiciones anteriores debe imprimir
"No es múltiplo ni de 3 ni de 5" */

let numero = prompt("Ingresar un numero");
let valor1 = numero /3;
let valor2 = numero /5;
if (Number.isInteger(valor1) && Number.isInteger(valor2)) {
    console.log ("multiplo de 3 y 5");
}else if (Number.isInteger (valor1)){
    console.log ("multiplo de 3");
}else if(Number.isInteger(valor2)){ 
    console.log("multiplo de 5")
} else {
    console.log("no es multiplo ni 3 ni de 5")
}
    



 