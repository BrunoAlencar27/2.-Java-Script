/*
Descrição: Trabalando com tipos de referência 
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/

//Declarção básica
const objeto={
    nome:"Bruno",
    altura:"1.7",
    peso:"81"

};

//Passagem de valor 
const var1 = objeto;
const var2 = objeto; //var1 e var2 tem os mesmo valores e são dependentes

console.log(var1,var2);

//Provando que são dependente, altero em var1 e se altera em var2
var1.nome="Balens";
console.log(var1,var2);



console.log(b);
