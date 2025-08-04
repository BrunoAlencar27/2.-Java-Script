/*
Descrição: Trabalhando com o Objeto Map
com getters e setters
Data:04/08/25
Autor:Bruno Alencar Alves
*/

const pessoas = [
	{id:3, nome: 'José'},
	{id:2, nome: 'Antonio'},
	{id:1, nome: 'Pedro'}
 ]

const novasPessoas = new Map();

 for (pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id,{...pessoa});
 }

 console.log(novasPessoas);

 console.log(novasPessoas.get(2));