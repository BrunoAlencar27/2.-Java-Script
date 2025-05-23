/*
Descrição:Crie uma função que receba um objeto `usuario` e um novo email como parâmetro, e atualize a
propriedade `email` desse objeto.
Autor: Bruno Alencar Alves
Data: 22/05/2025
*/

//FUNÇÃO
function newEmail(objeto,email){
    objeto.email=email;
}
//OBJETO
const usuario = {
    email:"Bruno@gmail.com"
};
console.log(`Email antigo: ${usuario.email}`);
newEmail(usuario,"Balencs@gmail.com");
console.log(`Email novo: ${usuario.email}`);
