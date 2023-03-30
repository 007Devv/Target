var percentual;
var valorTotal;
var valorSp = 67836.43;
var valorRj = 36678.66;
var valorMg = 29229.88;
var valorEs = 27165.48;
var valorOutros = 19849.53;

valorTotal = valorSp + valorRj + valorMg + valorEs + valorOutros;
console.log("O valor total é de: R$"+valorTotal);

percentual = valorSp * 100 / valorTotal;
console.log("O percentual representado por SP é de: %"+percentual.toFixed(2));

percentual = valorRj * 100 / valorTotal;
console.log("O percentual representado por RJ é de: %"+percentual.toFixed(2));

percentual = valorMg * 100 / valorTotal;
console.log("O percentual representado por MG é de: %"+percentual.toFixed(2));

percentual = valorEs * 100 / valorTotal;
console.log("O percentual representado por ES é de: %"+percentual.toFixed(2));

percentual = valorOutros * 100 / valorTotal;
console.log("O percentual representado por Outros é de: %"+percentual.toFixed(2));