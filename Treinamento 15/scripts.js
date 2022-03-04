// switch.. case

let alunos; //resuperação, na media, acima da media 
alunos = 'acima da media';

switch (alunos) {
    case 'recuperação':
        console.log("Você ficou de recuperação :(" );
    break;

    case 'na media':
        console.log("Você ficou na media!!");
    break;

    case 'acima da media':
        console.log("Você ficou acima da media, parabéns!! :)")
    break;

    default:
        console.log("Usuario não cadastrado");
}