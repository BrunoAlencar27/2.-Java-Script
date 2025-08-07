/*
Descrição: Trabalhando o uso de Symbol em classes
Autor: Bruno Alencar Alves
Data: 07/08/25
*/

const _velocidade = Symbol('velocidade');

class Carro{
    constructor(nome){
        this.nome=nome;
        //Propriedade privada criada com o Symbol
        this[_velocidade]=0;
    }
}
