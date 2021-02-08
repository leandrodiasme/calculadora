// Criar um arquivo calculadora.js, em que devemos importar os quatro arquivos feitosanteriormente.
let soma = require('./somar');
let subtracao = require('./subtrair');
let multiplicacao = require('./multiplicar');
let divisao = require('./dividir');

console.log(soma(5,5))
console.log(subtracao(5,5))
console.log(multiplicacao(5,5))
console.log(multiplicacao(0,5))
console.log(divisao(5,5))
console.log(divisao(5,0))