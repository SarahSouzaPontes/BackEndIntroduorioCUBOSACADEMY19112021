// Calculadora Epidemiológica

let po=1000;
let x=4;
let t=100;

let p = po *Math.pow(x, t/7)
const pre = p.toFixed(3)
console.log (`A prevalência de COVID-19 após ${t} dias é de ${x} pessoas.`)