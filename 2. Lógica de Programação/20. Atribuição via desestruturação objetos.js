/*
Descrição:Trabalhando atribuição via desestruturação com objetos
Autor: Bruno Alencar Alves
Data: 09/06/25
*/

//Sintaxe de declarção
const pessoa = {
    nome:"Bruno",
    idade:24,
    peso:81,
};
const {nome,idade,peso}=pessoa;
console.log(nome,idade,peso);


//Definindo um valor padrão
let pessoa2 = {
    //nome2:"Bruno",
    idade2:24,
    peso2:81,
};
const {nome2="Bruno",idade2,peso2}=pessoa2;
console.log(nome2,idade2,peso2);

//Variável com nome diferente do atributo passado
let pessoa3 = {
    nome3:"Bruno",
    idade3:24,
    peso3:81,
};
const {nome3:nome_da_pessoa,idade3,peso3}=pessoa3;
console.log(nome_da_pessoa,idade3,peso3);

//Operador rest
let pessoa4 = {
    nome4:"Bruno",
    idade4:24,
    peso4:81,
};
const {nome4,...resto}=pessoa4;

console.log(resto);
