//Declaração da função principal
function principal(funcao){
    console.log("Vou executar a função callback");
    callback();
}
//Declarção da função que será passda como argumento
function callback(){
    console.log("Estou sendo executada dentro da função principal");
}
/*
Chamada da função principal passando a função callback como 
argumento
*/
principal(callback);
