/*
Descrição:Trabalhando a função reduce com arrays
Autor: Bruno Alencar Alves
Data: 19/07/25
*/

const numeros = [1,2,3,4,5,6,7,8,9,10];

const soma = numeros.reduce(function(acumulador,valor){
    return acumulador+=valor;
},0);

console.log(soma);