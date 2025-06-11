/*
Descrição:Trabalhando com setInterval, setTimeout e clearInterval
Autor: Bruno Alencar Alves
Data: 10/06/25
*/

function mostrarHora(){
    const hora = new Date();
    return console.log(hora.toLocaleTimeString("pt-br",{
        hour12:false
    }))
}

//uso do clearInterval
const timer = setInterval(mostrarHora,1000);

//SetTimeout usado combinado com o clearInterval
setTimeout(function(){
    clearInterval(timer);
},5000);