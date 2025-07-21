/*
Descrição: Trabalhando com a função Object.definedProperty
com getters e setters
Data:20/07/25
Autor:Bruno Alencar Alves
*/

function Produto(nome,preco,estoque){
    this.nome=nome;
    this.preco=preco;
    //Variável auxiliar para setar os valores da chave "Estoque"
    estoquePrivado = estoque; 
    Object.defineProperty(this, 'estoque',{
        enumerable:true,
        configurable:true,
        get: function (){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !='number'){
                console.log('ERRO');
            }else{
                estoquePrivado = valor;
            }  
        }
    });
}

const p1 = new Produto("Café",1000,4);
console.log(p1.estoque);
p1.estoque = 999;
console.log(p1.estoque);


