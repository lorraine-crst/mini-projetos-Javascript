//receber uma quantidade de valores para avaliar
//funçao exibe se cada valor e par ou impar

quantidade(10);

function quantidade(limite){
    for(let i = 0; i<= limite; i++) {
        if (i % 2 === 0)
        console.log(i, 'par');
        else 
            console.log(i, 'impar');
    }
}

console.log(quantidade)