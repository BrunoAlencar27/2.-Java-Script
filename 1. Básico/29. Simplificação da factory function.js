/*
Descrição: Simplificação de uma factory function
Autor: Bruno Alencar Alves
Data: 20/05/2025
*/

function factory(cor,peso,altura,material){
    return{cor,peso,altura,material
    };
}

const objeto1 = factory("Azul",2000,2.4,"Cimento");

console.log(`O Objeto 1 tem a cor ${objeto1.cor}`);