const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com",
    fones: ["55912345498", "55221548889"]
}

cliente.fones.forEach(fone => {
    console.log(fone)
});