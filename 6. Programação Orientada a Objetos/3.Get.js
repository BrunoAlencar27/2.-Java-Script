/*
Descrição: Trabalhando o uso do método get
Autor: Bruno Alencar Alves
Data: 07/08/25
*/

const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome=nome;
        this[_velocidade]=0;
    }
    get velocidade(){
        return this[_velocidade];
    }
}

const c1 = new Carro('D20');

//Obtendo a informação da propriedade velocidade
console.log(c1.velocidade);

