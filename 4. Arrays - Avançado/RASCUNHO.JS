let tarefas = ["Acordar", "Estudar", "Treinar", "Ler", "Dormir"];

tarefas.splice(2,1);
tarefas.splice(2,1,"Programar");
tarefas.splice(1,0,"Tomar café");

console.log(tarefas);