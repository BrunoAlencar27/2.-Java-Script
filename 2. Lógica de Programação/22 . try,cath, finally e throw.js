/*
Descrição:Trabalhando com setInterval, setTimeout e clearInterval
Autor: Bruno Alencar Alves
Data: 10/06/25
*/

function dividr(a,b){
    if(b==0){
        throw new Error("Não se divide por zero");
    }
    return a/b;
}
try{
    console.log(devidir(1,0));
}catch(error){
    console.log("Não se divide por zero");
    console.log(error);
}finally{
    console.log("sempre execute")
}