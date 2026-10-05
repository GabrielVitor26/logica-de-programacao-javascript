let carrosVendidos = Number(prompt("Informe o numero de carros vendidos: "));
let valorTotalVendas = Number(prompt("Informe o valor total das vendas: "));
let salarioFixo = Number(prompt("Informe o salario fixo: "));
let comissaoPorCarro = Number(prompt("Informe a comissao por carro vendido: "));

let salarioFinal = salarioFixo + (carrosVendidos * comissaoPorCarro) + (valorTotalVendas * 0.05);

console.log("O salario final do vendedor e: ", salarioFinal);