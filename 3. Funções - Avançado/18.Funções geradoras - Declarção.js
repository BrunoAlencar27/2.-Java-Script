/*
Descrição: Declaração padrão de um função geradora
Autor: Bruno Alencar Alves
Data: 17/07/25
*/

function* geradora(){
    yield "1";
    yield "2";
    yield "3";
}

console.log(geradora().next());
console.log(geradora().next().value);
console.log(geradora().next().value);
