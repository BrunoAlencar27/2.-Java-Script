/*
Descrição: Trabalhando o uso de this com funções fábrica
Autor: Bruno Alencar Alves
Data: 06/07/25
*/
function fabrica(nome,idade,peso,altura){
    return {
        nome,
        idade,
        peso,
        altura,
        nacionalidade:"Brasileiro",

        falaNome(){
            console.log(`Meu nome é ${this.nome}`);
        },
        geraInformacoes(){
            console.log("Informações da Pessoa");
            console.log(`Nome:${this.nome}`);
            console.log(`Idade:${this.idade} anos`);
            console.log(`Peso:${this.peso}Kg`);
            console.log(`Altura:${this.altura}m`);
            console.log(`Nacionalidade:${this.nacionalidade}`);  
        }
    };
}

pessoa1=fabrica("Bruno",25,80,1.8);
pessoa1.falaNome();
console.log('');
pessoa1.geraInformacoes();
