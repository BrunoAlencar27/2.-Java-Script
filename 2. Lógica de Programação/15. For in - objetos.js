/*
Descrição:Trabalhando com a estrutura de repetição for of
Autor: Bruno Alencar Alves
Data: 01/06/25
*/

const pessoa = {
    nome:"Bruno",
    idade:24,
    peso:81,
    altura:1.70,
};

for(let chave in pessoa){
    console.log(chave,pessoa[chave]);
}