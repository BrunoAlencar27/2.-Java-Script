/*
Descrição: Trabalhando o uso do método getter
Autor: Bruno Alencar Alves
Data: 05/08/25
*/

class Carro{
    constructor(marca,modelo,ano){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;

    }

    get informacoes(){
        return console.log(`${this.marca},${this.modelo},${this.ano}`);
    }

}

const c1 = new Carro('Chevrolet','D20',2000);

c1.informacoes;
