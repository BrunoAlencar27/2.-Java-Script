/*
Descrição: Trabalhando com a função Object.definedProperty
para configuração de métodos
Data:20/07/25
Autor:Bruno Alencar Alves
*/

function Pessoa (nome,sobrenome,idade){
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;

    this.AnoNasc = function(){
        const data = new Date();
        return data.getFullYear()-this.idade;
    }

    Object.defineProperty(this,'AnoNasc',{
        enumerable:true,
        writable:true,
        configurable:true,

    });
}

const p1 = new Pessoa('Bruno','Alencar',25);

console.log(p1.AnoNasc());