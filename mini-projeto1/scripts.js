let corPrimaria = 'azul';
function resetaCor1(cor1){
    corPrimaria = cor1;
}; 
console.log(corPrimaria);
resetaCor1('roxo');
console.log(corPrimaria);


let corSecundaria = 'roxo';
function resetaCor2(cor2){
    corSecundaria = cor2;
}; 
console.log(corSecundaria);
resetaCor2('azul');
console.log(corSecundaria);

//ou 

let corAzul = 'azul';
let corRoxa = 'roxa';

let reservaCor = corAzul;
corAzul = corRoxa;
corRoxa = reservaCor;

console.log(corAzul);
console.log(corRoxa);