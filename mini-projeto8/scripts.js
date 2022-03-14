// obter a media a partir de um array
// 0-59: E
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const resultado = [80, 100, 90];
console.log(mediaAluno(resultado));

function mediaAluno(notas){
    let soma = 0;
    for (let nota of notas){
        soma += nota;
    } 
    const media = soma/(notas.length);

    if(media < 59) return 'E';
    if(media < 69) return 'D';
    if(media < 79) return 'C';
    if(media < 89) return 'B';
    return 'A';
}