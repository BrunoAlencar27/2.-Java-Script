/*
Algumas funções mais utilizadas para strings
Autor:Bruno Alencar Alves
Data:12/05/25
*/

const string="Tô só dando um exemplo";

console.log(string.length);//Retorna o tamanho da string
console.log(string.toUpperCase());//Tudo Maiúsculo
console.log(string.toLowerCase());//Tudo Minúsculo
console.log(string.trim());//Remove espaços em branco do inicio e fim da string
console.log(string.includes("só"));//Verifica se a sequência "só" existem dentro da string
console.log(string.startsWith("Tô"));//Verifica se a string começa com a sequência "Tô"
console.log(string.endsWith("exemplo"));//Verifica se a string termina com sequência "exemplo"
console.log(string.slice(0,1));//Exibe apenas o que estiver entre os índice 0 e 1
console.log(string.substring(0,1))//Semelhante ao slice
console.log(string.replace("exemplo","mortal para trás"))//Subtitui a parte "exmplo" por "mortal para trás"
console.log(string.split(","));//Divide a string com base no separado "s" e retonra um array
console.log(string.charAt(0));//Retorna o caracter que esta na posição 0