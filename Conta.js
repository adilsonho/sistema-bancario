// Define a classe Conta
class Conta {
    // Construtor da classe Conta que inicializa os atributos titular e saldo
    constructor(titular, saldo = 0) {
        this.titular = titular;
        this.saldo = saldo;
    }

    // Método para depositar um valor na conta
    depositar(valor) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
    }

    // Método para sacar um valor da conta, com verificação de saldo suficiente
    sacar(valor) {
        if (valor > this.saldo) {
            console.log('Saldo insuficiente.');
        } else {
            this.saldo -= valor;
            console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
        }
    }
}

// Exporta a classe Conta para que possa ser utilizada em outros arquivos
module.exports = Conta;
