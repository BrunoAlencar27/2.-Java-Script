/*
Descrição: Função é objeto de primeira classe não é ?
Autor: Bruno Alencar Alves
Data: 04/07/25
*/

function criaMultiplicador(multiplicador){
    function multiplica(n){
        return n*multiplicador;
    }
    return multiplica;
}

const duplica = criaMultiplicador(2)
const triplica = criaMultiplicador(3); 

console.log(duplica(100));
console.log(triplica(100));
