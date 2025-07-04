/*
Descrição: Atribuição via desestruturação com funções para objetos
Autor: Bruno Alencar Alves
Data: 04/07/25
*/

function exemplo({nome,idade,altura}){
    console.log(nome,idade,altura);
}

const objeto={
    nome:"Bruno",
    idade:25,
    altura:1.7,
};

exemplo(objeto);