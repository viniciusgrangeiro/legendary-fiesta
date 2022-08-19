const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com"
}

console.log(cliente.nome);
console.log(cliente.idade);
// a funcao substing esta imprimindo apenas os numero '023'
// pois nos parametros estao o indice 0 até o 3
console.log(cliente.cpf.substring(0,3));
console.log(cliente.email);


