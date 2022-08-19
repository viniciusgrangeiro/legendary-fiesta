const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com",
    fones: ["55464646464", "5598989898"],
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNascimento: "20/03/2001"
    }]
}

cliente.dependentes.push({
    nome: "Serasa Maria",
    parentesco: "filha",
    dataNascimento: "04/01/2014" 
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente =>
    dependente.dataNascimento ==="04/01/2014" 
)

console.log(filhaMaisNova[0].nome);