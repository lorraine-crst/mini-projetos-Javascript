//criar um metodo para ler propiedade3s de um objeto
// exibir somente as propiedades do tipo string que estao nesse objeto

const meusDados = {
    nome: 'lorraine',
    idade: 21,
    nascimento: 2001,
    sobrenome: 'cristina'
}

exibirDados(meusDados);
function exibirDados(obj){
    for (prop in obj)
        if(typeof obj[prop] === 'string')
         console.log(prop, obj[prop])
    }