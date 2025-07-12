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



