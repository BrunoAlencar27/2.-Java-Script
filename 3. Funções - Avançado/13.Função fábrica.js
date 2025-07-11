/*
Descrição: Sintaxe básica de uma função fábrica
Autor: Bruno Alencar Alves
Data: 06/07/25
*/

function fabrica(nome,idade,peso){
    return {
        nome,
        idade,
        peso,
        
        fala(){
            console.log("Chamou?");
        },
    };
}

pessoa1 = fabrica("Bruno",25,1.8);

//Acessando atributos
console.log(pessoa1.nome);
console.log(pessoa1.idade);
console.log(pessoa1.peso);

//Acessando métodos
pessoa1.fala();