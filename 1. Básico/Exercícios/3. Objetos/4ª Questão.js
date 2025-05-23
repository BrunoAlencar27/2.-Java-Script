/*
Descrição:Crie um objeto `retangulo` com as propriedades `largura` e `altura`
e um método chamado`calcularArea` que retorna a área do retângulo.
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/
const retangulo = {
    largura:4,
    altura:2,

    calcularArea(){
        return (this.largura*this.altura);

    },
};
console.log(retangulo.calcularArea());
