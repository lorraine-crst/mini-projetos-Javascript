//laço loop/for

// For
for(let ovos= 1; ovos < 12; ovos++){
     console.log('essa caixa de ovos contem:', ovos ,' unidades');
} 

for(let alunos= 1; alunos <= 32; alunos++){
    if(alunos % 2 == 0){
        console.log(alunos);
    }
} 

//for..in
const meusDados = {
    nome: 'Lorraine',
    idade: '21 anos',
    signo: 'Capricornio'
};

for (let chave in meusDados){
    console.log(chave, meusDados.signo);
}

//for..of
const roupas = ['blusa', 'shortes', 'saia'];
for (let roupa of roupas){
    console.log(roupa);
}