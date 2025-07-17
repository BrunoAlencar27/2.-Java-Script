/*
Descrição: Retorno de funções com funçoes geradoras
Autor: Bruno Alencar Alves
Data: 17/07/25
*/

function* geradora(){
    yield function(){
        console.log("função 1");
    }
    yield function(){
        console.log("função 2");
    }
}

const f1 = geradora().next().value;
const f2 = geradora().next().value;

f1();
f2();