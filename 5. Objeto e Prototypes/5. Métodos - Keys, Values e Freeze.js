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

//Object.keys e Object.values
console.log(Object.keys(Produto));
console.log(Object.values(Produto));

//Object.freeze
Object.freeze(Produto);
Produto.nome='Gasolina'
console.log(Produto);