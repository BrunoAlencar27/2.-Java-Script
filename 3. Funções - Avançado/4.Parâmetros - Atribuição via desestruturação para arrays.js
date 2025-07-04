/*
Descrição: Atribuição via desestruturação com funções para arrays
Autor: Bruno Alencar Alves
Data: 04/07/25
*/

function exemplo([nome,idade,altura]){
    console.log("Nome:",nome);
    console.log("Idade:",idade);
    console.log("Altura:",altura);
}

const array = ["Bruno",25,1.7];

exemplo(array);
