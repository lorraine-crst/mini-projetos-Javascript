//escreva uma função que usa 2 numeros, e retorna o maior entre eles.

let maiorValor = maiorNumero(6,8);

function maiorNumero(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    }
    else{
        return numero2;
    }
};

console.log(maiorValor);