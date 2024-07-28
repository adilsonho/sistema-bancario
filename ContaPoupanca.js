// Importa a classe Conta
const Conta = require('./conta');

// Define a classe ContaPoupanca que herda da classe Conta
class ContaPoupanca extends Conta {
    // Construtor da classe ContaPoupanca que inicializa os atributos titular, saldo e rendimento
    constructor(titular, saldo, rendimento = 0.05) {
        super(titular, saldo); // Chama o construtor da classe base Conta
        this.rendimento = rendimento;
    }

    // Método para aplicar rendimento ao saldo da conta
    aplicarRendimento() {
        this.saldo += this.saldo * this.rendimento;
        console.log(`Rendimento aplicado. Saldo atual: R$${this.saldo}`);
    }
}

// Exporta a classe ContaPoupanca para que possa ser utilizada em outros arquivos
module.exports = ContaPoupanca;
