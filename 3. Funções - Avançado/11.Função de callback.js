/*
Descrição: Sintaxe básica de uma função de callback
Autor: Bruno Alencar Alves
Data: 06/07/25
*/

/*Essa será executada primeiro e depois irá chamar
a segunda função, que é uma função de callback
*/
function saudacao(nome,callback){
    console.log(`Olá ${nome}`);
    despedida();//Execução

}
//Função de callback
function despedida(){
    console.log("Até logo !");
}
//Chamada da primeira função
saudacao("Bruno",despedida);
