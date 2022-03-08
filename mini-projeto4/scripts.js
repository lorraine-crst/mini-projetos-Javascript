// velocidade max de 70 retorna um  nao ultrapassou os limites
// a cada 5 km acima do limite voce ganha um ponto na carteira retorna pontos +1
//Math.floor() aredondar para o decimal mais proximo
//pontos acima de 12 retorna 'a carteira esta suspendida'

velocidadeAtingida(86);

function velocidadeAtingida(velocidade){
    const maxVelocidade = 70;
    if(velocidade <= maxVelocidade)
        console.log('Você está na velocidade correta');
    else{
        const pontos = Math.floor(((velocidade - maxVelocidade) / 5));
        if(pontos >= 12)
            console.log('sua carteira está suspensa');
        else
        console.log(pontos,'pontos')
    }
}