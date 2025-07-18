/*
Descrição: Trabalhando com função filter, exemlpo 
filtrando nomes de pessoas
Autor: Bruno Alencar Alves
Data: 18/07/25
*/

const alunos = [
  { nome: "Ana", nota: 9 },
  { nome: "Bruno", nota: 6 },
  { nome: "Carlos", nota: 8 },
  { nome: "Diana", nota: 5 },
  { nome: "Eduarda", nota: 7 }
];

const alunosAprovados = alunos.filter(valor=>valor.nota>=7);
console.log(alunosAprovados);