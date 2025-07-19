const pessoas = [
    {nome:"Luiz",idade:62},
    {nome:"Maria",idade:23},
    {nome:"Eduardo",idade:55},
    {nome:"Leticia",idade:19},
    {nome:"Rosana",idade:32},
    {nome:"Wallace",idade:47},
];

const soma = pessoas.reduce(function(acumulador,valor){
    acumulador+=valor.idade;
    return acumulador;
},0);

console.log(`Soma das idades:${soma}`);