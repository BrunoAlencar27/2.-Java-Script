/*
Descrição: Operador rest
Autor: Bruno Alencar Alves
Data: 04/07/25
*/

function exemplo(nome,idade,...resto){
    console.log(nome,idade,resto);
}

exemplo("Bruno",25,1.7,"Brasileiro","Programador");