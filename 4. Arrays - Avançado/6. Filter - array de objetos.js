/*
Descrição: Trabalhando a função filter com arrays de objetos
filtrando nomes de pessoas
Autor: Bruno Alencar Alves
Data: 18/07/25
*/

const pessoas = [
    {nome:"Bruno",idade:24},
    {nome:"Antonio",idade:5},
    {nome:"Paloma",idade:24},
    {nome:"Zé",idade:90}
];

console.log(pessoas);

function CallbackFilter(valor){
    if(valor.nome.length>=5){
        return true;
    }else{
        return false;
    }
}

console.log("Só pessoas com o nome com um nº >= 5");
const PessoasComNomeMaior = pessoas.filter(CallbackFilter);
console.log(PessoasComNomeMaior);