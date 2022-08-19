const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "02348283403",
    email: "andre@email.com",
    fones: ["55464646464", "5598989898"],
    dependentes: [
        {
            nome: "Sara",
            parentesco: "filha",
            dataNascimento: "20/03/2001"
        },
        {
            nome: "Serasa Maria",
            parentesco: "filha",
            dataNascimento: "21/06/2014"
        }
    ],
    saldo: 100,

    depositar: function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo);

cliente.depositar(100);

console.log(cliente.saldo);