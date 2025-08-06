/*
Descrição: Trabalhando o uso dos metodos getter e setter em conjunto
Autor: Bruno Alencar Alves
Data: 06/08/25
*/

class Carro {
    constructor(marca,modelo,ano){
        this.marca=marca;
        this.modelo=modelo;
        this.ano=ano;
    }
    
    get informacoes(){
        return console.log(this.marca, this.modelo, this.ano);
    }

    set mudaAno(ano){
        if(ano<=1950)return console.log('Ano inválido');
        this.ano=ano;
        return console.log('Ano atualizado com sucesso !');

    }
}

const c1 = new Carro('Chevrolet','D20',2000);

c1.informacoes;
c1.mudaAno=1940;
c1.mudaAno=1999.
c1.informacoes;