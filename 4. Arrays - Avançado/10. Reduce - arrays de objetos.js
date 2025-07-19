/*
Descrição:Trabalhando a função reduce com arrays de objetos
Autor: Bruno Alencar Alves
Data: 19/07/25
*/

const pessoas = [
    {nome:"Luiz",idade:62},
    {nome:"Maria",idade:23},
    {nome:"Eduardo",idade:55},
    {nome:"Leticia",idade:19},
    {nome:"Rosana",idade:32},
    {nome:"Wallace",idade:47},
];

const anciao = pessoas.reduce(function(acumulador,valor){
    if(acumulador.valor>valor.valor){
        return acumulador;
    }else{
        return valor;
    }
});

console.log(anciao);