/*
Descrição: Trabalhando o uso dos metodos set
Autor: Bruno Alencar Alves
Data: 07/08/25
*/

const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade]=0;
    }
    
    set velocidade(valor){
        this[_velocidade]=valor;

    }
}

const c1 = new Carro('D20');

console.log(c1);

//Definindo um valor para a propriedade velocidade
c1.velocidade = 50;
console.log(c1);

