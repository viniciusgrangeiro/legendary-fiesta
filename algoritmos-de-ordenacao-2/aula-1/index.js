const { edGalho, edFolha } = require('./arrays');

function juntaListas(lista1, lista2) {
  let listaFinal = [];
  let posicaoAtualLista1 = 0;
  let posicaoAtualLista2 = 0;
  let atual = 0;

  while (posicaoAtualLista1 < lista1.length && posicaoAtualLista2 < lista2.length) {


    // define os valores a serem comparados
    let produtoAtualLista1 = lista1[posicaoAtualLista1];
    let produtoAtualLista2 = lista2[posicaoAtualLista2];


    // compara o preco do livro da lista 1 e o da lista 2
    if (produtoAtualLista1.preco < produtoAtualLista2.preco) {
      listaFinal[atual] = produtoAtualLista1;
      posicaoAtualLista1++;
    } else {
      listaFinal[atual] = produtoAtualLista2;
      posicaoAtualLista2++;
    }

    atual++;
  }

  // Verifica se ha livros sobrando nas listas 1 e 2 e insere eles na lista final

  while (posicaoAtualLista1 < lista1.length) {
    listaFinal[atual] = lista1[posicaoAtualLista1];
    posicaoAtualLista1++;
    atual++;
  }

  while (posicaoAtualLista2 < lista2.length) {
    listaFinal[atual] = lista2[posicaoAtualLista2];
    posicaoAtualLista2++;
    atual++;
  }

  return listaFinal;
}

console.log(juntaListas(edGalho, edFolha))