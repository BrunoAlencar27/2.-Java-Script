/*
Descrição: Trabalhando o conceito de polimorfismo
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

//CLASSE FILHA
class Smartphone extends DispositivoEletronico{
    constructor(nome,modelo,cor,ano){
        super(nome);
        this.modelo = modelo;
        this.cor = cor;
        this. ano = ano;
    }
    //POLIMORFISMO ACONTECENDO ATRAVÉS DA SOBRESCRITA DO MÉTODO LIGAR
    ligar(){
        return console.log('Você alterou o método ligar');
    }
}

const s1 = new Smartphone('Samsung','Galaxy S10','Preto',2018);

s1.ligar();