/*
Descrição: Trabalhando o básico de funções
Autor: Bruno Alencar Alves
Data: 19/05/2025
*/

//DECLARAÇÃO COM PARÂMETRO PRÉ-DEFINIDO
function exemplo(nome="Vegeta"){
    console.log(`Olá ${nome}`);
    return "Hoje é segunda !";
}

//PASSAGEM DE PARÂMETRO
exemplo("Bruno");

//ARMAZENAMENTO DE RETORNO
const exemplo2 = exemplo();
console.log(exemplo2);