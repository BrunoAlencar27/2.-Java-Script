/*
Descrição: Passando o prototype de uma função como sendo o prototype de um outra  
com getters e setters
Data:01/08/25
Autor:Bruno Alencar Alves
*/

function Produto(nome,preco){
    this.nome=nome;
    this.preco=preco;

    Produto.prototype.desconto = function(percentual){
        this.preco-=(this.preco*(percentual/100));
    }
}

function Camisa(nome,preco){
    Produto.call(this,nome,preco);
}

Camisa.prototype=Object.create(Produto.prototype);
Camisa.prototype.constructor=Camisa;

const c1 = new Camisa('Regata',100);

c1.desconto(10);

console.log(c1);

