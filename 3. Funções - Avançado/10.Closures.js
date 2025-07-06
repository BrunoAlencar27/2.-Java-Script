/*
Descrição: Trabalhando com closures
Autor: Bruno Alencar Alves
Data: 06/07/25
*/

function teste(teste){
    const nome = "Bruno";
    return function(){
        console.log(nome);
        console.log(teste);

    }
}

const Armazenafunction = teste("bruno");
Armazenafunction();
 
