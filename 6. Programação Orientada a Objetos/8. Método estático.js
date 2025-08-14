/*
Descrição: Trabalhando com método estático
Autor: Bruno Alencar Alves
Data: 14/08/25
*/

const _nome = Symbol('nome');

class Pessoa{
    constructor(nome,idade,peso){
        this[_nome] = nome;
        this.idade = idade;
        this.peso = peso;

    }
    //MÉTODO DE INSTÂNCIA
    get nome(){
        return this[_nome];
    }
    //MÉTODO DE INSTÂNCIA
    set nome(newNome){
        this[_nome] = newNome;
    }
    //MÉTODO ESTÁTICO
    static saudacao(){
        console.log('Olá sou a classe pessoa !');
    }
}


const p1 = new Pessoa('Bruno',24,80);

console.log(p1.nome);


Pessoa.saudacao();
