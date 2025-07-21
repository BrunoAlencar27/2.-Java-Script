function Pessoa (nome,idade,peso){
            this.nome=nome;
            this.idade=idade;
            this.peso=peso;
            
            Pessoa.prototype.falaNome = function(){
                return(`Meu nome é ${this.nome}`);
            };
}

const pessoa1 = new Pessoa('Bruno',24,80);
//console.log(pessoa1);
console.log(pessoa1);