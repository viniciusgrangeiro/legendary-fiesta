const livros = require('./listaLivros')

function insertionSort(lista){
    
    for(let atual = 0; atual < lista.length; atual++){
        let analise = atual
        // lista[analise] for menor que o indice anterior -> [analise - 1]
        while (analise > 0 && lista[analise].preco < lista[analise -1].preco){
            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]
        
            // troca os livros de lugares
            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }
    }
    
    console.log(lista)
}

insertionSort(livros)