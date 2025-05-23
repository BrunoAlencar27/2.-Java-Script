/*
Descrição: Crie uma factory function chamada `criarAluno` que recebe `nome` e `nota` como parâmetros e
retorna um objeto com essas propriedades. Depois, use essa função para criar dois alunos com
nome e nota
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/
function criarAluno(nome,nota){
    return {
        nome:nome,
        nota:nota
    }; 
}
const aluno1 = criarAluno("Bruno",10);
const aluno2 = criarAluno("José",9);
console.log(aluno1);
console.log(aluno2);
