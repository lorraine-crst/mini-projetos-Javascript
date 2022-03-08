//Divisivel por 3 => Fizz
//Divisivel por 5 => Buzz
//divisivel por ambos => FizzBuzz
// Retorna o valor quando ele nao é divisivel por nenhum deles
// se o valor inserido nao for numero, aparecerna tela "nao é um numero"

const resultado = fizzBuzz(11);
console.log(resultado);

function fizzBuzz(entrada){
    if (entrada % 3 === 0 && entrada % 5 === 0)
        return 'FizzBuzz';

    if (entrada % 3 === 0)
        return 'Fizz';

    if (entrada % 5 === 0)
        return 'Buzz';


    if (typeof entrada !== 'number')
        return 'não é um número';

   return entrada; 
}