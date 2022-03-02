//função sem parametros

let tamanhoSite = 450;
function resetaTamanho(){
    tamanhoSite = "";
}; 

console.log(tamanhoSite,);
resetaTamanho();
console.log(tamanhoSite);

//função com parametros

let corSite = "rosa";
function resetaCor(cor,tonalidade){
    corSite = cor + tonalidade;
}; 

console.log(corSite);
resetaCor("roxo" ," escuro");
console.log(corSite);