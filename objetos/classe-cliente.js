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

const andre = new Cliente("andre", "andre@email.com", "222111333", 100)

console.log(andre);

andre.depositar(25)

andre.exibirSaldo()