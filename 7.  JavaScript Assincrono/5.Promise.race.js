/*
Descição: Trabalhando o método Promise.race
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
        setTimeout(()=>{
            resolve(msg);
        },tempo);
    });
}

const promises = [
    setTime('Frase 1',random(1,3)),
    setTime('Frase 2',random(1,3)),
    setTime('Frase 3',random(1,3)),
    setTime('Frase 4',random(1,3)),
];

Promise.race(promises).then(resultado=>console.log(resultado));