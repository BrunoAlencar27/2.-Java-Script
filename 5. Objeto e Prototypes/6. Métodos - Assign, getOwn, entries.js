/*
Descrição: Trabalhando com métodos para objetos
com getters e setters
Data:20/07/25
Autor:Bruno Alencar Alves
*/

const Produto ={
    nome:'Café',
    preco:1000,
    estoque:4,
}

//Object.assign
const Produto2 = Object.assign(Produto);

console.log(Produto);
console.log(Produto2);

//Object.getOwnPropertypeDescriptor
console.log(Object.getOwnPropertyDescriptor(Produto,'nome'));

//Objet.entries
console.log(Object.entries(Produto));