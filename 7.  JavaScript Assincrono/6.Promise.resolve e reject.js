/*
Descição: Trabalhando os métodos Promise.resolve e Promise.reject
Autor:Bruno Alencar Alves
Data:17/08/25
*/

const minhaPromise = Promise.resolve('Terminado');
const minhaPromise2 = Promise.reject('Rejetiado');

minhaPromise.then(resultado=>console.log(resultado));
minhaPromise2.catch(erro=>console.log(erro));
