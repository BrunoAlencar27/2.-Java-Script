/*
Descrição: Passando um objeto como prototype de um outro objeto
com getters e setters
Data:30/07/25
Autor:Bruno Alencar Alves
*/


const objA = {
    chaveA:"A"
};

const objB = {
    chaveB:"B"
};

Object.setPrototypeOf(objB,objA);

console.log(objB.chaveA);