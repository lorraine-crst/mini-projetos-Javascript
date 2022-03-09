let contadorItem = 75897;

let listaItemSelecionado = ['porçao', 'espada', 'escudo ', 'botas', 'anel'];

itemSelecionado = listaItemSelecionado[0];

for (let itemNoInventario in listaItemSelecionado){
    if(itemNoInventario !=null && itemSelecionado && contadorItem > 10) {
        
    }
    else(contadorItem = contadorItem + (itemNoInventario.length)) 
}

console.log(contadorItem);