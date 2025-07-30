/*
Descrição: Passando um objeto como prototype de um outro objeto
com getters e setters
Data:30/07/25
Autor:Bruno Alencar Alves
*/

function Produto (nome,preco){
    this.nome=nome,
    this.preco=preco,
    
    Produto.prototype.desconto=function(desc){
        this.preco-=(this.preco*(desc/100));
    }
}

const p1 = new Produto('Café',1000);

p1.desconto(50);
console.log(p1);

const p2 ={nome:'Shampoo',preco:100};

//Passando o prototype da funçção construtora Produto para p2
Object.setPrototypeOf(p2, Produto.prototype);

p2.desconto(45);
console.log(p2);