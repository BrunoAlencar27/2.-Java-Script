/*
Descrição: Trabalhando o conceito de classe 
Autor: Bruno Alencar Alves
Data: 05/08/25
*/

class Pessoa{
    constructor(nome,idade,peso){
        this.nome = nome;
        this.idade = idade;
        this.peso = peso;
    }
    fala(){
        return console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa('Bruno',24,80);
const p2 = new Pessoa('Antonio',55,78);

p1.fala();
p2.fala();