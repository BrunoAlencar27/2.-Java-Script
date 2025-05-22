/*
Descrição: Trabalando com tipos primitivos 
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/

//Declarção básicas
let tipo1 = "Uma frase";

//Imutailidade dos tipos primitivos
tipo1[0]="A";//isso não ocore 
tipo1="Outra frase"//isso ocorre

//Passagem de valor
let tipo2 = tipo1; //tipo1 tem o mesmo valor de tipo1 e é independente dela.
console.log(tipo1,tipo2);