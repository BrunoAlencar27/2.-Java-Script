/*
Descição: Trabalhando o método Promise.all
Autor:Bruno Alencar Alves
Data:15/08/25
*/

//Função que cria promise única
function timeOut(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string'){
            reject('Bad value');
        }else{
            setTimeout(()=>{
                resolve(msg);
            },tempo)
        }
    });
}

//Array com promises
const promises = [
    timeOut('Frase 1',1000),
    timeOut('Frase 2',10000),
    timeOut('Frase 3',3000),
    timeOut('Frase 4',2000)
]

//Método recebendo as promises
Promise.all(promises).then((resultado)=>{
    console.log(resultado)
}).catch((erro)=>{
    console.log(erro);
})