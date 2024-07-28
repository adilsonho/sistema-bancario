// Importa a classe Conta
const Conta = require('./conta');

// Define a classe ContaCorrente que herda da classe Conta
class ContaCorrente extends Conta {
    // Construtor da classe ContaCorrente que inicializa os atributos titular, saldo e juros
    constructor(titular, saldo, juros = 0.02) {
        super(titular, saldo); // Chama o construtor da classe base Conta
        this.juros = juros;
    }

    // Método para aplicar juros ao saldo da conta
    aplicarJuros() {
        this.saldo += this.saldo * this.juros;
        console.log(`Juros aplicados. Saldo atual: R$${this.saldo}`);
    }
}

// Exporta a classe ContaCorrente para que possa ser utilizada em outros arquivos
module.exports = ContaCorrente;
