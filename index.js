// Importa o módulo prompt-sync para ler entradas do usuário
const prompt = require('prompt-sync')();

// Importa as classes Conta, ContaCorrente e ContaPoupanca
const Conta = require('./conta');
const ContaCorrente = require('./contaCorrente');
const ContaPoupanca = require('./contaPoupanca');

console.log('Bem-vindo ao sistema bancário.');

// Solicita o nome do titular da conta ao usuário
const titular = prompt('Digite o nome do titular: ');

// Solicita ao usuário para escolher o tipo de conta
const tipoConta = prompt('Escolha o tipo de conta (1 - Corrente, 2 - Poupança): ');

// Declara uma variável para armazenar a conta
let conta;

// Verifica o tipo de conta escolhido pelo usuário e cria a respectiva conta
if (tipoConta === '1') {
    conta = new ContaCorrente(titular, 0);
} else if (tipoConta === '2') {
    conta = new ContaPoupanca(titular, 0);
} else {
    console.log('Tipo de conta inválido.');
    process.exit(); // Encerra o programa se o tipo de conta for inválido
}

// Loop infinito para permitir várias operações na conta
while (true) {
    // Solicita ao usuário para escolher uma ação
    const acao = prompt('Escolha a ação (1 - Depositar, 2 - Sacar, 3 - Ver Saldo, 4 - Aplicar Juros/Rendimento, 5 - Sair): ');

    if (acao === '1') {
        // Deposita um valor na conta
        const valor = parseFloat(prompt('Digite o valor para depósito: '));
        conta.depositar(valor);
    } else if (acao === '2') {
        // Saca um valor da conta
        const valor = parseFloat(prompt('Digite o valor para saque: '));
        conta.sacar(valor);
    } else if (acao === '3') {
        // Exibe o saldo atual da conta
        console.log(`Saldo atual: R$${conta.saldo}`);
    } else if (acao === '4') {
        // Aplica juros ou rendimento, dependendo do tipo de conta
        if (conta instanceof ContaCorrente) {
            conta.aplicarJuros();
        } else if (conta instanceof ContaPoupanca) {
            conta.aplicarRendimento();
        }
    } else if (acao === '5') {
        // Encerra o programa
        console.log('Saindo...');
        break;
    } else {
        // Exibe mensagem de erro se a ação for inválida
        console.log('Ação inválida.');
    }
}
