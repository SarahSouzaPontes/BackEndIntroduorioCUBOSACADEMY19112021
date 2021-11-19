let aplicacao = 90;
let jurosEmPorcentagem = 0.10;
let periodo = 3;
let jurosAcumulado = aplicacao * Math.pow(1+ (jurosEmPorcentagem), periodo);
console.log(jurosAcumulado)