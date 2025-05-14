/*
Tratando imprecisão dos numbers com toFixed
Autor:Bruno Alencar Alves
Data:16/05/25
*/

//Padrão: IEE 754-2008

let num1 = 0.7;
let num2 = 0.1;

console.log(`Imprecisão:${num1+num2}`);

num1+=num2;
num1+=num2;
num1+=num2;

console.log(`Imprecisão:${num1+num2}`);

num1 = num1.toFixed(2);

console.log(`Visualemtne, um inteiro:${num1}`);


console.log("A variável \"num1\" é inteira? "+Number.isInteger(num1));







