/*
Tratando imprecisão dos numbers com parseFloat
Autor:Bruno Alencar Alves
Data:16/05/25
*/

/*Padrão: IEE 754-2008, pradão adotado pelo o js para a 
imprecisão dos numeros de ponto flutuante*/
let num1 = 0.7;
let num2 = 0.1;

console.log(`Imprecisão:${num1+num2}`);

num1+=num2;
num1+=num2;
num1+=num2;

console.log(`Imprecisão:${num1+num2}`);

num1 = parseFloat(num1.toFixed(2));

console.log(`Visualemtne, um inteiro:${num1}`);


console.log("A variável \"num1\" é inteira? "+Number.isInteger(num1));


