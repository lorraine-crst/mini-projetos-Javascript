//If..else

//se eu tiver minha nota entre 0 e 50 emitir que preciso de aula de reforço
// se minha nota estiver de 50 a 70 emitir que sou alina comum e estou na media
// caso contario, emitir que sou staff 

let nota = 70;

if (nota > 0 && nota < 50){
    console.log("Procure um staff para reforço");
} 
else if (nota > 50 && nota < 70){
    console.log("Voce esta na media da turma");
}
 else{
    console.log("Sua nota está acima da media!! Seja staff da turma (opcional)");
}