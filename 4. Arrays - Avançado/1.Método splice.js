/*
Descrição: Trabalhando com método splice
Autor: Bruno Alencar Alves
Data: 17/07/25
*/

const nomes = ["Bruno","Alencar","Alves"];
console.log(nomes);

//remove no íncice 1 um elemento e adiciona no íncice 1 o elemento "Martins"
const removidos = nomes.splice(1,1,"Martins");

console.log(removidos);
console.log(nomes);

//remove no íncice 1 um elemento e adiciona no íncice 1 o elemento "Alencar"
nomes.splice(1,1,"Alencar");
console.log(nomes);