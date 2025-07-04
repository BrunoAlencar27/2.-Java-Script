/*
Descrição: Valor padrão de um parâmetro
Autor: Bruno Alencar Alves
Data: 04/07/25
*/

function exemplo(nome,idade=24){
    console.log(`Olá${nome}, você trem ${idade} anos`);
}

exemplo("Bruno");