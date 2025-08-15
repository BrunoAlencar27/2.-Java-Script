/*
Descição: Trabalhando o conceito básico de Promises
Autor:Bruno Alencar Alves
Data:15/08/25
*/

const minhaPromise = new Promise((resolve,reject)=>{
    const deuCerto = true;
    setTimeout(()=>{
        if(deuCerto){
            resolve('Tudo certo !');
        }else{
            reject('Falha');
        }
    },2000);
});

minhaPromise.then((resultado)=>{
    console.log(resultado);
}).catch((falha)=>{
    console.log(falha);
})