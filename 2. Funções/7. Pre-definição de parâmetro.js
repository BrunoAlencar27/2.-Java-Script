//Método 1 de pré-definição
function exemplo01(a,b){
    a=a||0;
    b=b||10;
    console.log(a,b);
}
//Não passei argumento
exemplo01();


//Método 2 de pré-definição
function exemplo02(a=0,b=10){
    console.log(a,b);
}
//Não passei argumentos
exemplo02();


//Caso para 3 parâmetros
function exemplo03(a=0,b=0,c=0){
    console.log(a,b,c);
}
//Não passando argumentos para uma função com 3 parâmetros
exemplo03(undefined,undefined,undefined);