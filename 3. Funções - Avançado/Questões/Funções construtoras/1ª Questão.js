/*
Questão: Crie uma função construtora "Carro" que tenha os seguintes atributos marca,
modelo e ano. Além disso um método para mostrar as informações sobre o carro.
*/

function Carro(marca,modelo,ano){
    this.marca=marca;
    this.modelo=modelo;
    this.ano=ano;

    this.informacoes=function(){
        console.log(`Marca:${this.marca}`);
        console.log(`Modelo:${this.modelo}`);
        console.log(`Ano:${this.ano}`);
    };
}

carro1 = new Carro("Chevrolet","D20",2000);
carro2 = new Carro("Nissan","Skyline",1995);

carro1.informacoes();
console.log("");
carro2.informacoes();
