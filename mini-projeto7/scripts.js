//criar uma funçao que retorna todos os multiplos de 3 e de 5

somar(30);
function somar(limite){
    let multiplo3 = 0;
    let multiplo5 = 0;
    for ( i = 0; i<= limite; i++){
        if(i % 3 ===0)
            multiplo3 += i;
            if( i % 5 === 0)
            multiplo5 += i;
    }
    console.log(multiplo3 + multiplo5);
}