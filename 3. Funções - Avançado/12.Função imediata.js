/*
Descrição: Sintaxe básica de uuma função imeidata
Autor: Bruno Alencar Alves
Data: 06/07/25
*/
//Cria um escopo isolado só para a função
(function(nome){
    const idade = 25;
    console.log("Dentro da função imediata");
    console.log(nome,idade);
})("Bruno");

//Escopo global
const nome = "Bruno";
const idade = 25;
console.log('');
console.log("Fora da função imediata");
console.log(nome,idade);