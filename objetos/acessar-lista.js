const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com"
}

const chaves = ["nome", "idade", "cpf", "email"]

// console.log(cliente[chaves[0]]);


chaves.forEach(info => console.log(cliente[info]))