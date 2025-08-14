/*
Descrição: Trabalhando o conceito de Herança com classes
Autor: Bruno Alencar Alves
Data: 14/08/25
*/

//CLASSE PAI
class DispositivoEletronico {
    constructor(nome){
        this.nome=nome;
        this.ligado=false
    }

    ligar(){
        if(this.ligado==true){
             console.log('Dispositivo já está ligado');
        }else{
            this.ligado = true;
        }
    }

    desligar(){
        if(this.ligado!=true){
            console.log('Dispositivo já está desligado');
        }else{
            this.ligado = false;
        }

    }
}

//CLASSE FILLHA
class Smartphone extends DispositivoEletronico{
    constructor(nome,modelo,cor,ano){
        super(nome);
        this.modelo = modelo;
        this.cor = cor;
        this. ano = ano;
    }
}

const s1 = new Smartphone('Samsung','Galaxy S10','Preto',2018);

console.log(s1);