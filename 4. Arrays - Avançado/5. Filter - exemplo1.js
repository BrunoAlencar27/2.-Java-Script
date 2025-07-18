/*
Descrição: Trabalhando com função filter, exemplo 
filtrando os números pares
Autor: Bruno Alencar Alves
Data: 18/07/25
*/

const numeros = [1,2,3,4,5,6,7,8,9,10];

function CallbackFilter(valor,){
    if(valor%2==0){
        return true;
    }else{
        return false;
    }
}

const numerosPares = numeros.filter(CallbackFilter);

console.log(numerosPares);