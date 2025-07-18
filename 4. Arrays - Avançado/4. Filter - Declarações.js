/*
Descrição: Várias formas de escrever uma função filter
Autor: Bruno Alencar Alves
Data: 18/07/25
*/

const numeros = [1,2,3,4,5,6,7,8];

//Anonymous function
const maiorQue4 = numeros.filter(function(valor){
    return valor>=4;
});

//Arrow function
const pares = numeros.filter((valor)=>{
    return valor%2==0;
});

//One line arrow function
const impares = numeros.filter(valor=>valor%2!=0);

console.log(`Números:${numeros}`);
console.log(`Maior que 4:${maiorQue4}`);
console.log(`Pares:${pares}`);
console.log(`Ímpares:${impares}`);