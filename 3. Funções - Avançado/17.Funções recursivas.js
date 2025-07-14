/*
Descrição: Trabalhando com função recursiva
Autor: Bruno Alencar Alves
Data: 13/07/25
*/

function recursiva(max){
    console.log(`Eu conto:${max}`);
    if(max>=100){
        return;
    }
    max++;
    recursiva(max);
}

recursiva(1);
