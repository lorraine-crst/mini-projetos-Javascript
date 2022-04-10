//operadores logicos
//! nao (not), && e (and) , || ou (or) 

//&& = retorna se somente os dois operandos estiverem de acordo (true and true ou somente se false and false)
console.log(true && true);
console.log(false && false);
console.log(true && false);
console.log(1 && 2);
console.log(1 && 1);

let maiordeIdade = true;
let tirarcarteira = true;
let menorDeIdade = false;
let podeaplicar = maiorDeIdade && tirarCarteira;
let naoPodeAplicar = menorDeIdade && tirarCarteira;
console.log(naoPodeAplicar);
console.log(podeAplicar);


// || = retorna true se um dos operandos forem true
console.log(true || false);
console.log(false || false);
console.log(1 || 2);
console.log(1 || 1);

let MaiorDeIdade = true;
let TirarCarteira = true;
let MenorDeIdade = false;
let PodeAplicar = maiorDeIdade || tirarCarteira;
let NaoPodeAplicar = menorDeIdade || tirarCarteira;
console.log(naoPodeAplicar);
console.log(podeAplicar);


// ! 
let maiorDeIdade = false;
let tirarCarteira = false;
let podeAplicar = maiorDeIdade || tirarCarteira;
let carteiraRecusada = !podeAplicar;

console.log('pode aplicar: ' , podeAplicar);
console.log('candidato recusado: ' , carteiraRecusada);