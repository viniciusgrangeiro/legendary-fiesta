const nomes = ['ana', 'marcos', 'maria', 'mauro']

const notas = [7, 4.5, 8, 7.5]


// _ -> parametro nao esta sendo utilizado
const reprovados = nomes.filter( (_, indice) => notas[indice] < 5)

console.log(`Reprovados: ${reprovados}`);
