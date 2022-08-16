const notas = [10, 6.5, 8, 7.5]

let somaDasNotas = 0

// forEach -> para cada (item da lista notas)

// callback, uma funcao que recebe como parametro outra funcao
notas.forEach( nota =>{
    somaDasNotas += nota
})

let media = somaDasNotas / notas.length

console.log(`A media das notas é ${media}`);