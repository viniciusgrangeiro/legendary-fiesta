const listaDeChamada = ['vini', 'rafa', 'dani', 'pai', 'mae']


// remove e adiciona qualquer elemento em qq posicao

//                // indice, quantos itens dps do indice vao ser removidos, e o novo item da lista
// listaDeChamada.splice(3,1, 'gaby')

// adicionando um item

// passar o 0 como parametro faz com que nenhum item seja removido e o 'gaby seja adicionado no indice 3'
listaDeChamada.splice(3,0, 'gaby')


console.log(`A nova lista de chamada: ${listaDeChamada}`)
// A nova lista de chamada: vini,rafa,dani,gaby,mae

