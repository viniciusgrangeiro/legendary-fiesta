const clientes = [
    {
        nome: "Andre",
        cpf: "32323232",
        dependentes : [
            {
                nome: "Sara",
                parentesco: "filha",
                dataNasc: "20/30/2001"
            },
            {
                nome: "Samia",
                parentesco: "filha",
                dataNasc: "04/01/2014"
            }
        ]
    },
    {
        nome: "Juliana",
        cpf: "45455454445",
        dependentes: [
            {
                nome: "Sophia",
                parentesco: "filha",
                dataNasc: "30/08/2020"
            }
        ]
    }
]
// ... operador de espalhamento
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]

console.table(listaDependentes);