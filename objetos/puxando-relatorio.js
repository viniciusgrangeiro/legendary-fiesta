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

let relatorio=""

// FOR IN
//     atributo in cliente
for(let info in cliente){
    // verifica se o tipo do atributo é object ou function
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
        continue
    } else{
        relatorio += `
        ${info} ==> ${cliente[info]}
        `
    }
    
}

console.log(relatorio);