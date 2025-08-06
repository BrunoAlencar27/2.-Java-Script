/*
Descrição: Trabalhando o uso do método setter
Autor: Bruno Alencar Alves
Data: 06/08/25
*/

class Carro{
    consturcto(marca,modelo,ano){
        this.marca = marca;
        this. modelo = modelo;
        this.ano = ano;
    }

    set mudaAno(ano){
        if(ano<=1950)return console.log('Ano inválido');
        this.ano = ano;
        return console.log('Ano atualizado');

    }
}

const c1 = new Carro('Chevrolet','D20',2000);

c1.mudaAno = 2001;