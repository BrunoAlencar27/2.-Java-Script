/*
Descrição: Trabalhando com função construtoras
Autor: Bruno Alencar Alves
Data: 11/07/25
*/

function Pessoa(nome,sobrenome){
    this.nome=nome;
    this.sobrenome=sobrenome;

    this.saudacao=function(){
        console.log(`Òlá meu nome é ${this.nome} ${this.sobrenome}`);
    };
}

p1 = new Pessoa("Bruno","Alencar");
p2 = new Pessoa("José","Pereira");
p1.saudacao();
p2.saudacao();