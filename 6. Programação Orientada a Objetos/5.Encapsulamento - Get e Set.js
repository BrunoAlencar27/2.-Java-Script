/*
Descrição: Trabalhando o conceito de encapsulamento com get e set 
Autor: Bruno Alencar Alves
Data: 14/08/25
*/

const _idade = Symbol['idade'];


class Pessoa{
    constructor(idade){
        this[_idade]=idade;

    }
    get idade(){
        return this[_idade];
    }
    set idade(novaIdade){
        if(novaIdade<=0)return;
        console.log('Idade atualizada');
        this[_idade]=novaIdade;
    }
}

const p1 = new Pessoa(20);
console.log(p1.idade);
p1.idade = 40;
console.log(p1.idade);

