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

// Object.keys traz um array com as chaves do objeto
function oferecerSeguro(obj){
    const propsClientes =  Object.keys(obj)
    // includes sempre retorna um booleano
    if(propsClientes.includes("dependentes")){
        //                                   propsCLiente.nome
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente)

// Object.values traz um array com os valores das chaves do objeto
console.log(Object.values(cliente));

// Object.entries traz arrays com as chaves e os valores do objeto
console.log(Object.entries(cliente));