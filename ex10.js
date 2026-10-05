let custoFabrica = Number(prompt("Informe o custo de fabrica do carro: "));

let valorDistribuidor = custoFabrica * 0.28;
let valorImpostos = custoFabrica * 0.45;
let custoFinal = custoFabrica + valorDistribuidor + valorImpostos;

console.log("O custo final ao consumidor e: ", custoFinal);