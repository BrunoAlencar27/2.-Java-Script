/*
Descrição:Trabalhando  com funções do objeto Date
Autor: Bruno Alencar Alves
Data: 01/06/25
*/

const dataAtual = new Date();

console.log("-----Relatório da Data------");
console.log(`Ano:${dataAtual.getFullYear()}`);
console.log(`Mês:${dataAtual.getMonth()}`);
console.log(`Dia do mês:${dataAtual.getDate()}`);
console.log(`Dia da semana:${dataAtual.getDay()}`);
console.log(`Horas:${dataAtual.getHours()}`);
console.log(`Minutos:${dataAtual.getMinutes()}`);
console.log(`segundos:${dataAtual.getSeconds()}`);
console.log(`Milisegundos:${dataAtual.getMilliseconds()}`);