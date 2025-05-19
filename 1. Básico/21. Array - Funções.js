/*
Descrição: trabalhando com função de Array
Autor: Bruno Alencar Alves
Data: 18/05/2025
*/

const nomes = ['Bruno','Carlos','Kilmes','Isayde','Heloíse'];

console.log(nomes.length);
nomes.push('Balencs');
console.log(nomes);
nomes.unshift('Slide');
console.log(nomes.slice(0,3));
console.log(nomes);
nomes.pop();
console.log(nomes);
nomes.shift();
console.log(nomes);
delete nomes[4];
console.log(nomes);
console.log(nomes instanceof Array);

