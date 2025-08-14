//Descrição: é só um rascunho


//CLASSE PAI
class DispositivoEletronico{
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado==true){
            console.log(`${this.nome} já está ligado`);
            return;
        }else{
            this.ligado=true;
        }
    }
    desligar(){
        if(this.ligado!=true){
            console.log(`${this.nome} já está desligado`);
            return;
        }else{
            this.ligado=false;
        }

    }
}

//CLASSE FILHA 
class Smartphone extends DispositivoEletronico{
    constructor(nome,cor,modelo,ano){
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
        this.ano = ano;

    }
}

const s1 = new Smartphone('Samsung','Preto','Galaxy S10',2018);

console.log(s1);

s1.desligar();