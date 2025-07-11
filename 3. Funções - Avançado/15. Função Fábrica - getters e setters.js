/*
Descrição: Trabalhando o uso de getters e getters com funções fábrica
Autor: Bruno Alencar Alves
Data: 06/07/25
*/

function fabrica(nome){
    return {
        nome,
        //usando o método get para exibir o nome
        get Falanome(){
            return this.nome;
        },
        //Usando o método set par mudar o nome
        set Falanome(NewName){
            this.nome=NewName;
        },
    };
}
pessoa1 = fabrica("Bruno");

console.log("Antes de mudar o nome");
console.log(pessoa1.nome);
console.log("");
console.log("Depois de mudar o nome");
pessoa1.Falanome="Alencar";
console.log(pessoa1.nome);