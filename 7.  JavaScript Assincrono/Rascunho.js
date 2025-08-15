//Só um rascunho...

const minhaPromise = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const deuCerto = true;
        if(deuCerto == true){
            resolve('Deu certo');
        }else{
            reject('Deu erado');
        }
    },2000);
    
})

minhaPromise
    .then((qualquer)=>{
        console.log(qualquer);

    })
    .catch((errado)=>{
        console.log(errado);
    })