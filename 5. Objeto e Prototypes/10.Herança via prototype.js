/*
Descrição: Trabalhando o conceito de herança
com getters e setters
Data:01/08/25
Autor:Bruno Alencar Alves
*/

//FUNÇÃO PAI
function Produto(nome,preco){
    this.nome = nome;
    this.preco = preco;

    Produto.prototype.desconto = function(percentual){
        this.preco =(this.preco*(percentual/100));
    }
    Produto.prototype.aumento = function(percentual){
        this.preco=(this.preco*(percentual/100));
    }
}

//FUNÇÃO FILHO - CAMISA
function Camisa(nome,preco,cor,tamanho){
    Produto.call(this,nome,preco);
    this.cor=cor;
    this.tamanho=tamanho;
}

//FUNÇÃO FILHO - TENIS
function Tenis(nome,preco,cor,tamanho){
    Produto.call(this,nome,preco);
    this.cor=cor;
    this.tamanho=tamanho;
}

//Estabelecendo uma herança via prototipal indireta entre Produto -> Camisa e Tenis
Camisa.prototype = Object.create(Produto.prototype);
Tenis.prototype = Object.create(Produto.prototype);

//Setando os construtoras de Camisa e Tenis
Camisa.prototype.constructor = Camisa;
Tenis.prototype.constructor = Tenis;

const camisa1 = new Camisa('Regata',100,'Azul','P');
const tenis1 = new Tenis('Jordan',1000,'preto',40);

//Acessando métodos de Produto indiretamente
camisa1.desconto(10);
tenis1.aumento(100000);

console.log(camisa1);
console.log(tenis1);



