// Não podemos criar constantes com palavras reservadas
//constante precisam ter nome significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// case-sensitive
// Não podemos modificar o valor de uma constante
// Não Utilize Var, Utilize const.

const nome='Rafael';
// nome = 'xavier'; não pode ser feito com constante


const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3;
resultadoTriplicado= resultadoTriplicado+5;
console.log(resultado, resultadoDuplicado,resultadoTriplicado);
console.log( typeof primeiroNumero);