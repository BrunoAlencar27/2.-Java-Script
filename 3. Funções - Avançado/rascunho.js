function* geradora(){
    yield "1";
    yield "2";
}

console.log(geradora().next().value);