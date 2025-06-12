//Receba 3 notas de um aluno, calcule a média e informe se o aluno está:

const notas = [5,6,7];
let soma=0;

for (let i of notas){
    soma+=i;
}

let media= soma/3;
console.log("Sua média = "+media);

if(media>=7){
    console.log("Você está aprovado");
}else if(5<=media<7){
    console.log("você está de recureração");
}else{
    consolse.log("Vocês está reprovado");
}