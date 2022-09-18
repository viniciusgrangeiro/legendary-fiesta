const listaLivros = require('./arrays')

function mergeSort(array, nivelAninhamento = 0) {

    console.log(`Nivel de Aninhamento ${nivelAninhamento}`);
    console.log(array);

    if(array.length > 1){
        // Math.floor -> arredonda pra baixo
        const meioArray = Math.floor(array.length / 2)
        // dividir o array em 2 partes e dividi-la em mais duas partes
        const parte1 = mergeSort(array.slice(0, meioArray), nivelAninhamento +1)
        const parte2 = mergeSort(array.slice(meioArray, array.length), nivelAninhamento +1)
        array = ordena(parte1, parte2)
    }

    return array
}

function ordena(parte1, parte2){
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado =[]

    while(posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length){

        // guarda o objeto que vai ser trocado de lugar
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
        let produtoAtualParte2 = parte2[posicaoAtualParte2]

        if(produtoAtualParte1.preco < produtoAtualParte2.preco){
            resultado.push(produtoAtualParte1)
            posicaoAtualParte1++
        } else{
            resultado.push(produtoAtualParte2)
            posicaoAtualParte2++
        }
    }

    return resultado.concat(posicaoAtualParte1 < parte1.length
        ? parte1.slice(posicaoAtualParte1)
        : parte2.slice(posicaoAtualParte2)) // slice vai pegar o valor no indice posicao atual parte 1 ou 2 até o final e concatenar
}

console.log(mergeSort(listaLivros));