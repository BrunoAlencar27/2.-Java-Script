/*
Descrição: Iteração sobre funções geradora usando for of
Autor: Bruno Alencar Alves
Data: 17/07/25
*/

function* geradora(){
    yield "1";
    yield "2";
    yield "3";
}

for(let valor of geradora()){
    console.log(valor);
}