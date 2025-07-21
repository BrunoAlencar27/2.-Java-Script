/*
Descrição: Trabalhando criação de método dentro do prototype de uma função
com getters e setters
Data:20/07/25
Autor:Bruno Alencar Alves
*/

function Pessoa(nome,sobrenome,idade){
    this.nome=nome;
    this.sobrenome=sobrenome;
    this.idade=idade;

    Pessoa.prototype.falaNome=function(){
        return `Meu nome é ${this.nome}`;
    }
}

const pessoa1 = new Pessoa("Bruno","Alencar",24);
const pessoa2 = new Pessoa("Antonio","Filho",55);

console.log(pessoa1.falaNome());
console.log(pessoa2.falaNome());

