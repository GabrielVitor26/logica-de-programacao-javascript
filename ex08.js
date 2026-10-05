let totalEleitores = Number(prompt("Informe o total de eleitores: "));
let votosBrancos = Number(prompt("Informe a quantidade de votos brancos: "));
let votosNulos = Number(prompt("Informe a quantidade de votos nulos: "));
let votosValidos = Number(prompt("Informe a quantidade de votos validos: "));

let percBrancos = (votosBrancos / totalEleitores) * 100;
let percNulos = (votosNulos / totalEleitores) * 100;
let percValidos = (votosValidos / totalEleitores) * 100;

console.log("Percentual de votos brancos: ", percBrancos);
console.log("Percentual de votos nulos: ", percNulos);
console.log("Percentual de votos validos: ", percValidos);