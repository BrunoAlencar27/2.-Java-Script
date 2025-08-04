/*
Descrição: Trabalhando Factory function + prototypes
com getters e setters
Data:04/08/25
Autor:Bruno Alencar Alves
*/

function Carro(marca,ano,estado){
    //CRIANDO UM PROTOTYPE MANUAL
    const objPrototype = {
        acelera(){
            console.log(`${this.marca} está acelerando`);
        },
        buzina(){
            console.log(`${this.marca} está buzinando`);
        }, 
        freia(){
            console.log(`${this.marca} está freando`);
        },
    }
    //RETORNANDO OBJETO COM PROTOTYPE E ATRIBUTOS
    return Object.create(objPrototype,{
        marca:{value:marca},
        ano:{value:ano},
        estado:{value:estado},
    });
}

const carro1 = Carro('Chevrolet',2000,'Usado');

carro1.acelera();