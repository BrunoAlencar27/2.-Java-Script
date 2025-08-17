/*
Descição: Trabalhando com Async e Await
Autor:Bruno Alencar Alves
Data:17/08/25
*/

function random(min,max){
    min*=1000;
    max*=1000;
    return Math.floor(Math.random()*(max-min)+min);
}

function setTime(msg,tempo){
    return new Promise((resolve,reject)=>{
        if(typeof msg !== 'string'){
            reject('Bad value');
        }else{
            setTimeout(()=>{
                resolve(msg);
            },tempo);
        }   
    });
}

async function executaPromises (){
    try{
        const frase1 = await setTime('Frase 1', random(1,3));
        console.log(frase1);
        const frase2 = await setTime(1111, random(1,3));
        console.log(frase2);
        const frase3 = await setTime('Frase 3', random(1,3));
        console.log(frase2);
    }catch(e){
        console.log(e);
    }
}

executaPromises();