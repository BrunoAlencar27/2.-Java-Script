/*
Descrição:Trabalhando com os comando continue e break
Autor: Bruno Alencar Alves
Data: 05/06/25
*/

const num = [1,2,3,4,5,6,7,8,9,10];

for(let valor of num){
    if(valor === 2){
        console.log("Pulei o 2");
        continue;//PULA PARA PRÓXIMA ITERÇÃO
    }
    console.log(valor);
    if(valor ===6){
        console.log("Ok, já encontrei o 6 agora posso cair");
        break;// SAI DA ESTRUTURA DE REPETIÇÃO
    }
}