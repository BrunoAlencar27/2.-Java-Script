/*
Descrição: Trabalhando com a função Object.definedProperties
para a configuração de várias chaves
Data:20/07/25
Autor:Bruno Alencar Alves
*/

function Produto(nome,preco,estoque){
    Object.defineProperties(this,{
        nome:{
            enumerable:true,
            value:nome,
            writable:true,
            configurable:true
        },
        preco:{
            enumerable:true,
            value:preco,
            writable:true,
            configurable:true

        },
        estoque:{
            enumerable:true,
            value:estoque,
            writable:true,
            configurable:true
        }
    });
}

const produto1 = new Produto("Café",1000,4);

console.log(produto1);