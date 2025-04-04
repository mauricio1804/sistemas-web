var a = 6;
var b = 15;
if(a === 6){
    let a = 5;
    var b = 3;
    console.log(a);
    console.log(b);
}
console.log(a);
console.log(b);

function minhaFuncao(n1: number, n2: number) : number{
    return n2 + n1;
}

console.log("O tamandua bandeira é: " + minhaFuncao(5,2))

function Diminuir(n1: number, n2:number) : number{
    return n1 - n2;
}

console.log("O tamandua bandeira é: " + Diminuir(5,2))

function tatu(n1: number, n2:number) : boolean{
    if(n1 > n2){
        return true;
    } else {
        return false;
    }
}

console.log("O tamandua bandeira é: " + tatu(5,2))