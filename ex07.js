let anos = Number(prompt("Informe a quantidade de anos: "));
let meses = Number(prompt("Informe a quantidade de meses: "));
let dias = Number(prompt("Informe a quantidade de dias: "));

let totalDias = (anos * 365) + (meses * 30) + dias;

console.log("A idade expressa em dias e: ", totalDias);