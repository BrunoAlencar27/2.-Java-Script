//Só um rascunho...

const minhaPromise = Promise.resolve('Resolvida');
const minhaPromise2 = Promise.reject('Erro')


minhaPromise.then(resultado => {console.log(resultado)});

minhaPromise2.catch(erro => {console.log(erro)});