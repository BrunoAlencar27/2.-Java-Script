/*
Descrição:Trabalhando com a biblioteca Objeto Math
Autor:Bruno Alencar Alves
Data:15/05/25
*/

const num1 = 0.57854545;

// FUNÇÕES DE ARREDONDAMENTOS
console.log(`Número original:${num1}`);
console.log(`Arredondo para cima:${Math.floor(num1)}`);
console.log(`Arredondo para baixo:${Math.ceil(num1)}`);
console.log(`Àrredondo para o mais próximo:${Math.round(num1)}`);
console.log("");

// MÁXIMO E MÍNIMOS DE SEQUÊNCIA 
console.log(`Sequência: 1,2,3,4,5,6,7,8,9,1000`);
console.log(`Máximo da sequência:${Math.max(1,2,3,4,5,6,7,8,9,10,1000)}`);
console.log(`Mínimo da sequência:${Math.min(1,2,3,4,5,6,7,8,9,10,1000)}`);
console.log("");

//NÚMEROS ALEATÓRIOS ENTRE 0 E 1 
console.log(`Sequência aleatória:${Math.random()}`);
//NÚMEROS ALEATÓRIOS ENTRE UM INTERVALO DELIMITADO
console.log(`Sequência aleatória entre 1 e 10:${Math.round(Math.random()*(10-1)+1)}`);

