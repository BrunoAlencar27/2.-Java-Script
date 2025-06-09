/*
Descrição:Trabalhando atribuição via desestruturação com arrays
Autor: Bruno Alencar Alves
Data: 05/06/25
*/

//Sintaxe de declaração
const array = [1,2,3,4,5];
const[a,b,c,d,e] = array;
console.log(a,b,c,d,e);

//Extraindo e atribuindo o resto
const array2 = [1,2,3,4,5];
const[a1, b2,...resto] = array2;
console.log(a1,b2);
console.log(resto);

//Extraindo e atrbibuindo valores selecionador
const array3 = [1,2,3,4,5];
const[a3,,c3,e3] = array3;
console.log(a3,c3,e3);

//Lista de arrays
const lista_arrays = [[1,2,3],[4,5,6],[7,8,9]];
const [lista1,lista2,lista3]=lista_arrays;
console.log(lista1);
console.log(lista2);
console.log(lista3);
