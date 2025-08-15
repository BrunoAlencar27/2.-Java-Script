/*
Descição: Exemplo de uma operação assícrona
Autor:Bruno Alencar Alves
Data:15/08/25
*/

//FUNÇÃO PARA FORNECER UM NÚMERO ALEATÓRIO
function random(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

//FUNÇÃO QUE EXECUTA O SET TIME OUT EM UM INTERVALO DE TEMPO ELEATÓRIO
function esperaAi(msg,tempo){
    setTimeout(()=>{
        console.log(msg);
    },tempo)
}

/* Essas chamadas representam operações assincronas
pois são executadas, mas não finalizadas em ordem o 
motor vai mostrando qual foi processada primeiro.
*/
esperaAi('Frase 1 ',random(1,3));
esperaAi('Frase 2 ',random(1,3));
esperaAi('Frase 3 ',random(1,3));