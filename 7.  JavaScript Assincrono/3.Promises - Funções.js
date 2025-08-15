/*
Descição: Trabalhando Promises com funções
Autor:Bruno Alencar Alves
Data:15/08/25
*/

//Função para criar um intervalor aleatório de tempo
function random(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

//Função com o setTimeout
function esperaAi(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg!== 'string'){
            reject('Bad value');
        }else{
            setTimeout(()=>{
                resolve(msg);
             },tempo);
        }
    });
}
//Primeira chamada da função
esperaAi('Conexão com base de dados',random(1,3)).then(resultado=>{
    //Primeira impressão do resultado
    console.log(resultado);
    //Segunda chamada da função
    return esperaAi('Buscando dados da base', random(4,10));
}).then(resultado=>{
    //Segunda impressão do resultado
    console.log(resultado);
    //Terceira chamada da função
    return esperaAi(222,random(1,2));
}).then(resultado=>{
    //Terceira impressão do resultado
    console.log(resultado);
}).then(()=>{
    console.log('Exibindo dados...')
}).catch(falha=>{
    console.log(falha);
})
