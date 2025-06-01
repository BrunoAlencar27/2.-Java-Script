/*
Descrição:Trabalhando com o marco zero do objeto date
Autor: Bruno Alencar Alves
Data: 29/04/25
*/
//Somando mais 3 horas no marco zero
const tres = 60*60*3*1000;
const marcoZero = new Date(0+tres);

console.log(marcoZero.toString());