class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo);
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo, saldoPoup){
        // traz atributos da superclasse
        super(nome,email,cpf,saldo)
        this.saldoPoup = saldoPoup
    }

    depositarPoup(valor){
        this.saldoPoup += valor
    }
}

const andre = new ClientePoupanca("andre", "andre@email.com", "225554444", 150, 300)

console.log(andre);

andre.depositar(50)
andre.depositarPoup(100)

console.log(andre);