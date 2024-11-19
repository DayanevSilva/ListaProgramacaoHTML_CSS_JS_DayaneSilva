import ContaBancaria from "./classes/ContaBancaria.js";

const conta1 = new ContaBancaria('Dayane',20000,567, '#123456');

console.log("Logando na conta...");
console.log(conta1.autenticacao(567,'#123456').message);
console.log('Verificar saldo:\n', conta1.saldo());
console.log('Realizar saque de 100 reais:\n', conta1.sacar(100));
console.log('Depositar 200 reais:\n', conta1.depositar(200));