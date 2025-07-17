/*
Descrição: Execução de funções geradoras em ordem
Autor: Bruno Alencar Alves
Data: 17/07/25
*/

function* geradora1(){
    yield "1";
    yield "2";
    yield "3";

}

function* geradora2(){
    yield* geradora1();
    yield"4";
    yield"5";
    yield"6";
}

for(let valor of geradora2()){
    console.log(valor);
}