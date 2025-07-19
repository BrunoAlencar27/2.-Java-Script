/*
Descrição:Trabalhando as funções filter,map e reduce em conjunto
Autor: Bruno Alencar Alves
Data: 19/07/25
*/

const numeros = [1,2,3,4,5,6,7,8,9,10];

//Filter+Map+Reduce em cadeia
const ParesDobraSoma = numeros.filter(function(valor){
    return valor%2==0;
}).map(function(valor){
    return valor*2;
}).reduce(function(acumulador,valor){
    return acumulador+=valor;
});

console.log(ParesDobraSoma);