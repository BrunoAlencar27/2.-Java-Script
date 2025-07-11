/*
Questão: crie uma função contrutora "Produto" com os atributos de nome, 
preço e quantidade. Crie também os métodos vender, repor e mostrarEstoque

Orientações para os métodos
método vender(unidades): subtrai a quantidade vendida do estoque. Se não houver estoque
suficiente mostrar uma mensagem de erro.
método repor(unidades): adiciona unidades ao estoque.
método mostrarEstoque(); retorna uma string com o nome do produto e a quantidade
armazenada no estoque.
*/

function Produto(nome,preco, quantidade){
    this.nome=nome;
    this.preco=preco;
    this.quantidade=quantidade;

    this.vender=function(unidades){
        if(unidades>this.quantidade){
            console.log("Erro: falta no estoque");
        }else{
            this.quantidade-=unidades;
        }
    };

    this.repor=function(unidades){
        this.quantidade+=unidades;
    };
    
    this.mostrarEstoque=function(){
        console.log(this.nome,this.quantidade);

    };
}

p1 = new Produto("Rexona",15.6,30);
p1.vender(20);
p1.mostrarEstoque();

p1.repor(10);
p1.mostrarEstoque();

p1.vender(100);



