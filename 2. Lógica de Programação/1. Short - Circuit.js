/*
Descrição:Trabalhando Short - Circuito com and
Autor: Bruno Alencar Alves
Data: 25/04/25
*/

function falaOi(){
    return "Oi, eu falei oi!";
}

const executa = "false";

//Short - circuit
console.log(executa && falaOi());