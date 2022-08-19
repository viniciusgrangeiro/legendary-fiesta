const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7]
const salaJava = [6, 5, 8, 9, 5, 6]
const salaPython = [7, 3.5, 8, 9.5]

function mediaSala(notasDaSala){
    // reduce sempre recebe dois parametros e funciona como loop
    // para ler o array
    const somaDasNotas = notasDaSala.reduce((acumulador, atual) =>
    //      acumulador = 0 'precisa iniciar o loop com 0'
    atual + acumulador, 0)
    return somaDasNotas / notasDaSala.length
}

console.log(`Media da sala de JavaScript ${mediaSala(salaJS)}`);
console.log(`Media da sala de Java ${mediaSala(salaJava)}`);
console.log(`Media da sala de Python ${mediaSala(salaPython)}`);


// const notas = [10, 6.5, 8, 7]

// function mediaDasNotas(notasDaSala){
//     const somaDasNotas = notasDaSala.reduce((acum, atual) =>
//     atual + acum,0)
//     return somaDasNotas / notas.length
// }

// console.log(`A media das notas é ${mediaDasNotas(notas)}`);
