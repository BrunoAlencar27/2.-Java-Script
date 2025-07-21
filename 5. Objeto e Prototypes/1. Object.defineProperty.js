/*
Descrição: Trabalhando com a função Object.definedProperty
Data:20/07/25
Autor:Bruno Alencar Alves
*/

function Pessoa (nome,sobrenome,idade){
    this.nome=nome,
    this.idade=idade,

    //Criando e configurando a chave sobrenome
    Object.defineProperty(this,'sobrenome',{
        enumerable:true,
        value:sobrenome,
        writable:false,
        configurable:false,
    })
}

const p1 = new Pessoa("Bruno","Alencar",24);

console.log(p1);