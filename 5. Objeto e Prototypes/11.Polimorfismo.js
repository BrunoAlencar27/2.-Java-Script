/*
Descrição: Trabalhando o conceito de polimorfismo
com getters e setters
Data:02/08/25
Autor:Bruno Alencar Alves
*/

function Conta(agencia,conta,saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor){
    if(this.saldo<valor){
        console.log(`Saldo insuficiente:R$:${this.saldo}`);
        return;
    }else{
        this.saldo-=valor;
    }
}
Conta.prototype.depositar = function(valor){
    this.saldo+=valor;
}
Conta.prototype.extrato = function(){
    console.log('--EXTRATO BANCÁRIO--');
    console.log(`Agência:${this.agencia}`);
    console.log(`Conta:${this.conta}`);
    console.log(`Saldo:${this.saldo}`);
    console.log('---------------------');
}


//CONFIGURANDO AS HERANÇAS
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constecutor = ContaCorrente;
ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;


function ContaCorrente(agencia,conta,saldo,limite){
    Conta.call(this,agencia,conta,saldo);
    this.limite = limite;
}

//---------CONFIGURAN O POLIMORFISMO-------------------
ContaCorrente.prototype.sacar = function(valor){
    if(this.saldo<valor){
        console.log(`Saldo insuficiente:R$${this.saldo}`);
    }else if(this.limite<valor){
        console.log(`Saque ultrapassa o limite:${this.limite}`);
    }else{
        this.saldo0-=valor;
    }
}
//---------CONFIGURAN O POLIMORFISMO-------------------
ContaCorrente.prototype.extrato = function(){
    console.log(`--EXTRATO BANCÁRIO --`);
    console.log(`Agência:${this.agencia}`);
    console.log(`Conta:${this.conta}`);
    console.log(`Saldo:${this.saldo}`);
    console.log(`Limite:${this.limite}`);
    console.log('---------------------');

}
function ContaPoupanca(agencia,conta,saldo){
    Conta.call(this,agencia,conta,saldo)
}

const cc1 = new ContaCorrente(11,33,1000,500);
cc1.extrato();

const cp1 = new ContaPoupanca(23,221,1000);
cp1.sacar(100);
cp1.extrato();





