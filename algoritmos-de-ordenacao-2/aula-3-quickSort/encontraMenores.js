const listaLivros = require('./arrays')

function encontraMenores(pivo, array){

    let menores = 0

    for(let atual = 0; atual < array.length; atual++){
        let produtoAtual = array[atual]

        if(produtoAtual.preco < pivo.preco){
            menores++
        }
    }
    
    // indexOf -> procura o indice
    trocaLugar(array, array.indexOf(pivo), menores)

    return array
}

function trocaLugar(array, de, para){
    const elemento1 = array[de]
    const elemento2 = array[para]

    array[para] = elemento1
    array[de] = elemento2


}

console.log(encontraMenores(listaLivros[2], listaLivros));