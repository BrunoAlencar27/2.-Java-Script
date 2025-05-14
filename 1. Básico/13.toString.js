/*
Trabalhando com toString
Autor:Bruno Alencar Alves
Data:14/05/25
*/
//CONVERSÃO MOMENTANEA 
const num1= 1;
const num2 = 2;

console.log(num1.toString()+num2);
console.log("Esse é tipo do num1:" +  typeof num1);

//CONVERSAO PERMANENTE
const num10 = 1;
const num20 = num10.toString();

console.log(num20);
console.log("Esse é o tipo do num20:"+ typeof num20);

//CONVERSÃO PARA BINÁRIO
const num3 = 10;
const num4 = num3.toString(2);
console.log("Esse é o número 10 em binário:"+num4);