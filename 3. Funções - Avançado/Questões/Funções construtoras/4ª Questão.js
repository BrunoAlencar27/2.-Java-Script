function Livro(titulo,autor,disponivel){
    this.titulo=titulo;
    this.autor=autor;
    this.disponivel=disponivel;

    this.emprestar=function(){
        if(this.disponivel==true){
            console.log("Livro emprestado com sucesso");
            this.disponivel=false;
        }else{
            console.log("Livro indisponível");
        }
    };

    this.devolver=function(){
        console.log("Livro devolvido com sucesso");
        this.disponivel=true;
    };

    this.exibirinfor=function(){
       console.log("");
       console.log(`---Informações do livro "${this.titulo}"---`);
       console.log(`Titulo:${this.titulo}`);
       console.log(`Autor:${this.autor}`);
       console.log(`Disponível:${this.disponivel? "Sim":"Não"}`);
       console.log("");
    };
}

const livro1 = new Livro("O rei do inverno","Bernard Cornwell",true);
const livro2 = new Livro("O Jogador","Fiodor Dostoievski",true);
livro1.emprestar();
livro1.emprestar();
livro1.devolver();
livro1.emprestar();
livro1.exibirinfor();
livro2.exibirinfor();