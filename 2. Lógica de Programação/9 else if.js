/*
Descrição:Trabalhando else if
Autor: Bruno Alencar Alves
Data: 25/04/25
*/

const hora = 10;

if(hora>=0 && hora <=12){
    console.log("Bom dia");
}else if(hora>12&&hora<=17){
    console.log("Boa tarde!");
}else if(hora>17&&hora<=24){
    console.log("Boa noite");
}else{
    console.log("Não está no formáto de 24horas")
}
