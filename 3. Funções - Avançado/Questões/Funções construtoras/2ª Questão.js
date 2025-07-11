/*
Questão:Cire uma função construtora chamada "Aluno" que deve receber nome,
matríocula e notas(array com 3 notas);Além disso a função deve ter dois 
métodos, um para calcular e informar a métida do aluno e outro para 
informar a situação do aluno(aprovador, reprovado ou de recuperação).
*/

function Aluno(nome,matricula,notas){
    this.nome=nome;
    this.matricula=matricula;
    this.notas=notas;

    this.media=function(){
        const mediaAluno=((this.notas[0]+this.notas[1]+this.notas[2])/3);
        console.log(`Sua média é:${mediaAluno.toFixed(2)}`);
        return mediaAluno;

    }
    this.situacao=function(){
        const media = this.media();
        if(media>=7){
            console.log("Aprovado");
        }else if(media>=5){
            console.log("Em recuperação");
        }else{
            console.log("Reprovado");
        }
    }
}

aluno1 = new Aluno("Bruno",1234,[10,5,8]);
aluno2 = new Aluno ("José",1234,[4,5,6]);

aluno1.situacao();
aluno2.situacao();
