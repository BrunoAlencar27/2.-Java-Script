const pessoas = [
    {nome:"Luiz",idade:62},
    {nome:"Maria",idade:23},
    {nome:"Eduardo",idade:55},
    {nome:"Leticia",idade:19},
    {nome:"Rosana",idade:32},
    {nome:"Wallace",idade:47},
];

function callback(valor,i){
    return {idade:valor.idade};
}


const newArray = pessoas.map(callback);
console.log(newArray);