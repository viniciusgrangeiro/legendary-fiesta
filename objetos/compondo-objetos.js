const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com"
}

cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNascimento: "20/03/2001"
}

console.log(cliente);

cliente.dependentes.nome = "Sara Silva"

console.log(cliente);