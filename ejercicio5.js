/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés,
es un valor que determina la cantidad de grasa de una persona.
El BMI se calcula con la siguiente formula:
peso / altura^2
Escribe un programa que le pida al usuario su peso y altura.
El programa deberá calcular el BMI e imprimir:
"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30. */

let peso = prompt("digite su peso");
let altura = prompt ("digite su altura");
let resultado = peso / (altura^2);
console.log (resultado);
if (resultado  < 18.5) {
    console.log ("Bajo de peso");
}else if( 18.5 >= resultado || resultado <= 24.9){
    console.log ("Normal");
}else if (25 >= resultado || resultado <=29.9){
    console.log ("Sobrepeso");
}else if ( resultado > 30) {
    console.log("Obeso");
}