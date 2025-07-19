/*
Descrição:Trabalhando a função mao com arrays
Autor: Bruno Alencar Alves
Data: 19/07/25
*/
//Array original
const pessoas = [
    {nome:"Luiz",idade:62},
    {nome:"Maria",idade:23},
    {nome:"Eduardo",idade:55},
    {nome:"Leticia",idade:19},
    {nome:"Rosana",idade:32},
    {nome:"Wallace",idade:47},
];


//Novo arrya apenas com os nomes das pessoas 
const nomes = pessoas.map(valor=>valor.nome);
//Novo array excluindo as chaves "nomes" dos objetos
const deleteNome = pessoas.map((valor)=>{
    return {idade:valor.idade}
});
//Novo array adicionando um chave "id" aos objetos
const ids = pessoas.map((valor,i)=>{
    return {nome:valor.nome,idade:valor.idade,id:i+=1}
});

console.log(nomes);
console.log(deleteNome);
console.log(ids)