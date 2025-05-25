/*
Descrição: Trabalhando com passagem de valor por cópia em tipos de referência
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/

//Cópia em Arrays

const a = [1,2,3,4];
const b = [...a];

//Cópia em Objetos
const o1 = {
    nome:"Bruno"
};
const o2 = {...o1};

console.log(b);
console.log(o2);
