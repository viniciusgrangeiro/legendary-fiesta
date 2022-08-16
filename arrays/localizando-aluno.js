const alunos = ['joao', 'juliana', 'caio', 'ana']

const mediasDosAlunos = [10, 7, 9, 6]

let listaDeNotasEAlunos = [alunos, mediasDosAlunos]

const exibeNomeNota = (nomeDoAluno) => {
//   includes verifica se existe o registro na funcao
// includes sempre retorna Verdadeiro ou Falso
    if (listaDeNotasEAlunos[0].includes(nomeDoAluno)){
        // procurando na lista de alunos o indice do nome do aluno
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno)
        return listaDeNotasEAlunos[0][indice] + ', sua media é '+ listaDeNotasEAlunos[1][indice]
    } else {
        return 'Aluno não esta cadastrado';
    }
}

console.log(exibeNomeNota('ana'));