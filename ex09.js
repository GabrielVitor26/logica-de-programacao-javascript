let salarioAtual = Number(prompt("Informe o salario mensal atual: "));
let percentualReajuste = Number(prompt("Informe o percentual de reajuste: "));

let novoSalario = salarioAtual * (1 + (percentualReajuste / 100));

console.log("O valor do novo salario e: ", novoSalario);